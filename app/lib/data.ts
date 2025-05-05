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
    const data = await sql<Revenue[]>`SELECT * FROM revenue`;
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
