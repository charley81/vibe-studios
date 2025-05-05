import postgres from 'postgres';
import {
  CustomerField,
  CustomersTableType,
  BookingForm,
  BookingsTable,
  LatestBookingRaw,
  Revenue
} from './definitions';
import { formatCurrency } from './utils';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchRevenue() {
  try {
    // TODO: remove delay once done with streaming/testing
    console.log('fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql<Revenue[]>`SELECT * FROM revenue`;
    console.log('Data fetch completed after 3 secs');
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data');
  }
}

export async function fetchLatestBookings() {
  try {
    const data = await sql<LatestBookingRaw[]>`
      SELECT bookings.amount, customers.name, customers.email, bookings.id
      FROM bookings
      JOIN customers ON bookings.customer_id = customers.id
      ORDER BY bookings.date DESC
      LIMIT 5
    `;

    const latestBookings = data.map((booking) => ({
      ...booking,
      amount: formatCurrency(booking.amount)
    }));

    return latestBookings;
  } catch (error) {
    console.error('Database Error:', Error);
    throw new Error('Failed to fetch the latest invoices');
  }
}

export async function fetchCardData() {
  try {
    const bookingCountPromise = sql`SELECT COUNT(*) from bookings`;
    const customerCountPromise = sql`SELECT COUNT(*) from customers`;
    const bookingStatusPromise = sql` 
      SELECT SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
      SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
      FROM bookings
    `;

    const data = await Promise.all([
      bookingCountPromise,
      customerCountPromise,
      bookingStatusPromise
    ]);

    const numberOfBookings = Number(data[0][0].count ?? '0');
    const numberOfCustomers = Number(data[1][0].count ?? '0');
    const totalPaidBookings = formatCurrency(data[2][0].paid ?? '0');
    const totalPendingBookings = formatCurrency(data[2][0].pending ?? '0');

    return {
      numberOfBookings,
      numberOfCustomers,
      totalPaidBookings,
      totalPendingBookings
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data');
  }
}
