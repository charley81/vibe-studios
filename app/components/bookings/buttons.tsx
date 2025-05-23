import { Pencil, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import { deleteBooking } from '@/app/lib/actions';

export function CreateBooking() {
  return (
    <Link
      href="/dashboard/bookings/create"
      className="flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black border border-transparent hover:border-black focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-violet-600"
    >
      <span className="hidden md:block">Create Booking</span>
      <Plus className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateBooking({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/bookings/${id}/edit`}
      className="rounded-md border p-2 hover:bg-slate-100"
    >
      <Pencil className="w-5" />
    </Link>
  );
}

export function DeleteBooking({ id }: { id: string }) {
  const deleteBookingWithId = deleteBooking.bind(null, id);
  return (
    <form action={deleteBookingWithId}>
      <button
        type="submit"
        className="rounded-md border p-2 hover:bg-slate-100"
      >
        <span className="sr-only">Delete</span>
        <Trash className="w-5" />
      </button>
    </form>
  );
}
