import Link from 'next/link';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Frown className="w-10 text-slate-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested booking.</p>
      <Link
        href="/dashboard/bookings"
        className="mt-4 rounded-md bg-black border border-transparent px-4 py-2 text-sm text-white transition-colors hover:bg-transparent hover:text-black hover:border-black"
      >
        Go back
      </Link>
    </main>
  );
}
