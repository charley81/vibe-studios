import { RefreshCw } from 'lucide-react';
import { LatestBooking } from '@/app/lib/definitions';

export default function LatestBookings({
  latestBookings
}: {
  latestBookings: LatestBooking[];
}) {
  return (
    <div>
      <h2>Latest Bookings</h2>
      <div>
        <div>
          {latestBookings.map((booking, i) => {
            return (
              <div key={booking.id}>
                <div>
                  <p>{booking.name}</p>
                  <p>{booking.email}</p>
                </div>
                <p>{booking.amount}</p>
              </div>
            );
          })}
        </div>
        <div>
          <RefreshCw />
          <h3>Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
