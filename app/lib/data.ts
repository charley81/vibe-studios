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

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredBookings(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const bookings = await sql<BookingsTable[]>`
      SELECT
        bookings.id,
        bookings.amount,
        bookings.date,
        bookings.status,
        customers.name,
        customers.email
      FROM bookings
      JOIN customers ON bookings.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        bookings.amount::text ILIKE ${`%${query}%`} OR
        bookings.date::text ILIKE ${`%${query}%`} OR
        bookings.status ILIKE ${`%${query}%`}
        ORDER BY bookings.date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return bookings;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch bookings');
  }
}

export async function fetchBookingsPages(query: string) {
  try {
    const data = await sql`SELECT COUNT(*)
    FROM bookings
    JOIN customers ON bookings.customer_id = customer_id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      bookings.amount::text ILIKE ${`%${query}%`} OR
      bookings.date::text ILIKE ${`%${query}%`} OR
      bookings.status ILIKE ${`%${query}%`} 
    `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error', error);
    throw new Error('Failed to fetch total number of bookings');
  }
}

export async function fetchBookingById(id: string) {
  try {
    const data = await sql<BookingForm[]>`
      SELECT
        bookings.id,
        bookings.customer_id,
        bookings.amount,
        bookings.status
      FROM bookings
      WHERE bookings.id = ${id}
    `;

    const booking = data.map((booking) => ({
      ...booking,
      // convert amount from cents to dollars
      amount: booking.amount / 100
    }));

    return booking[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch booking with id: ${id}`);
  }
}

export async function fetchCustomers() {
  try {
    const customers = await sql<CustomerField[]>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    return customers;
  } catch (error) {
    console.log('Database Error', error);
    throw new Error('Failed to fetch customers.');
  }
}
