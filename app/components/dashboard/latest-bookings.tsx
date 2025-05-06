import { RefreshCw } from 'lucide-react';
import { fetchLatestBookings } from '@/app/lib/data';
import clsx from 'clsx';

export default async function LatestBookings() {
  const latestBookings = await fetchLatestBookings();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">Latest Bookings</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-slate-100 p-4">
        <div className="bg-white px-6">
          {latestBookings.map((booking, i) => {
            return (
              <div
                key={booking.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0
                  }
                )}
              >
                <div>
                  <p className="truncate text-sm font-semibold md:text-base">
                    {booking.name}
                  </p>
                  <p className="hidden text-sm text-slate-500 sm:block">
                    {booking.email}
                  </p>
                </div>
                <p className="truncate text-sm font-medium md:text-base">
                  {booking.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <RefreshCw className="h-5 w-5 text-slate-500" />
          <h3 className="ml-2 text-sm text-slate-500">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
