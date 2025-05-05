// Contains type definitions for app data
// describes the shape of the data and what data type each property shoud accept
// these types are generated automatically if using an ORM like prisma

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
};

export type Booking = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestBooking = {
  id: string;
  name: string;
  email: string;
  amount: string;
};

// DB returns a number for amount, we will format it to a string with the formatCurrncy function
export type LatestBookingRaw = Omit<LatestBooking, 'amount'> & {
  amount: number;
};

export type BookingsTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  total_bookings: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type BookingForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
