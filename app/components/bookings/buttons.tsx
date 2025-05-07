import { Pencil, Plus, Trash } from 'lucide-react';
import Link from 'next/link';

export function CreateBooking() {
  return (
    <Link
      href="/dashboard/bookings/create"
      className="flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-white hover:border border-transparent hover:border-black focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-violet-600"
    >
      <span className="hidden md:block">Create Booking</span>
      <Plus className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateBooking({ id }: { id: string }) {
  return (
    <Link
      href="/dashboard/bookings"
      className="rounded-md border p-2 hover:bg-slate-100"
    >
      <Pencil className="w-5" />
    </Link>
  );
}

export function DeleteBooking({ id }: { id: string }) {
  return (
    <>
      <button
        type="submit"
        className="rounded-md border p-2 hover:bg-slate-100"
      >
        <span className="sr-only">Delete</span>
        <Trash className="w-5" />
      </button>
    </>
  );
}
