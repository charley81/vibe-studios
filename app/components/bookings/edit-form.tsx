'use client';

import { CustomerField, BookingForm } from '@/app/lib/definitions';
import { Check, Clock, CircleDollarSign, CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { updateBooking } from '@/app/lib/actions';

// TODO: Add form validation
// Add useActionState to edit form
// Edit the updateBooking action to handle validation errors from Zod
// Display errors in your component, and add aria labels to improve accessibility

export default function Form({
  booking,
  customers
}: {
  booking: BookingForm;
  customers: CustomerField[];
}) {
  const updateBookingWithId = updateBooking.bind(null, booking.id);

  return (
    <form action={updateBookingWithId}>
      <div className="rounded-md bg-slate-50 p-4 md:p-6">
        {/* customer name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              name="customerId"
              id="customer"
              className="peer block w-full cursor-pointer rounded-md border border-slate-200 py-2 pl-10 text-sm outline-2 placeholder:text-slate-500"
              defaultValue={booking.customer_id}
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <CircleUserRound className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500" />
          </div>
        </div>

        {/* booking amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-m">
            <div className="relative">
              <input
                type="number"
                id="amount"
                name="amount"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-slate-200 py-2 pl-10 text-sm outline-2 placeholder:text-slate-500"
                defaultValue={booking.amount}
              />
              <CircleDollarSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500" />
            </div>
          </div>
        </div>

        {/* booking status */}
        <fieldset>
          <legend className="mb-2 text-sm font-medium">
            Set the booking status
          </legend>
          <div className="rounded-md border border-s-teal-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pending"
                  name="status"
                  value="pending"
                  className="h-8 w-4 cursor-pointer border-slate-300 bg-slate-100 text-slate-600 focus:ring-1"
                  defaultChecked={booking.status === 'pending'}
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-shadow-slate-600"
                >
                  Pending <Clock className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pending"
                  name="status"
                  value="paid"
                  className="h-8 w-4 cursor-pointer border-slate-300 bg-slate-100 text-slate-600 focus:ring-1"
                  defaultChecked={booking.status === 'paid'}
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-600 text-white px-3 py-1.5 text-xs font-medium"
                >
                  Paid <Check className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/bookings"
            className="flex h-10 items-center rounded-lg bg-slate-100 border border-slate-200 px-4 tex-sm font-medium text-slate-600 transition-colors hover:bg-slate-200"
          >
            Cancel
          </Link>
          <Button type="submit">Edit Booking</Button>
        </div>
      </div>
    </form>
  );
}
