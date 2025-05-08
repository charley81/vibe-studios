'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';

const sql = postgres(process.env.POSTRGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string()
});

const CreateBooking = FormSchema.omit({ id: true, date: true });
const UpdateBooking = FormSchema.omit({ id: true, date: true });

export async function createBooking(formData: FormData) {
  const { customerId, amount, status } = CreateBooking.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO bookings (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  revalidatePath('/dashboard/bookings');
  redirect('/dashboard/bookings');
}

export async function updateBooking(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateBooking.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });

  const amountInCents = amount * 100;

  await sql`
    UPDATE bookings
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath('dashboard/bookings');
  redirect('/dashboard/bookings');
}

export async function deleteBooking(id: string) {
  await sql`DELETE FROM bookings WHERE id = ${id}`;
  revalidatePath('/dashboard/bookings');
}
