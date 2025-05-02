import { db } from '@vercel/postgres';
import {
  users,
  customers,
  bookings,
  revenue,
} from '../app/lib/placeholder-data.ts';
import bcrypt from 'bcrypt';

// ===== Seed users =====
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create users table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IS NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )
    `;

    console.log('Created users table');

    // Insert data into the users table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING
        `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

// ===== Seed bookings ====
async function seedBookings(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the bookings table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      date DATE NOT NULL
    )
    `;

    console.log('Created bookings table');

    // Insert data into the bookings table
    const insertedBookings = await Promise.all(
      bookings.map(
        (booking) => client.sql`
          INSERT INTO bookings (customer_id, amount, status, date)
          VALUES (${booking.customer_id}, ${booking.amount}, ${booking.status}, ${booking.date})
          ON CONFLICT (id) DO NOTHING
        `
      )
    );

    console.log(`Seeded ${insertedBookings.length} bookings`);

    return {
      createTable,
      bookings: insertedBookings,
    };
  } catch (error) {
    console.error('Error seeding bookings:', error);
    throw error;
  }
}

// ===== Seed customers ====
async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create client table if it doens't exist
    const createTable = await client.sql`
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255)  NOT NULL,
    email VARCHAR(255) NOT NULL,
    `;

    console.log('Create customers table');

    // Insert data into client table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email)
        values (${customer.id}, ${customer.name} ${customer.email})
        ON CONFLICT (id) DO NOTHING
        `
      )
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers', error);
    throw error;
  }
}

// ===== Seed revenue ====
async function seedRevenue(client) {
  try {
    // create the revenue table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    )
    `;

    console.log('Created revenue table');

    // insert data into the revenue table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING
        `
      )
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedBookings(client);
  await seedCustomers(client);
  await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
