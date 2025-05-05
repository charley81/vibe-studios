import { Card } from '../components/dashboard/cards';
import RevenueChart from '../components/dashboard/revenue-chart';
import LatestBookings from '../components/dashboard/latest-bookings';
import { fetchRevenue, fetchLatestBookings, fetchCardData } from '../lib/data';

export default async function DashboarPage() {
  const revenue = await fetchRevenue();
  const latestBookings = await fetchLatestBookings();
  const {
    numberOfBookings,
    numberOfCustomers,
    totalPaidBookings,
    totalPendingBookings
  } = await fetchCardData();

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card type="collected" title="collected" value={totalPaidBookings} />
        <Card type="pending" title="pending" value={totalPendingBookings} />
        <Card type="bookings" title="bookings" value={numberOfBookings} />
        <Card type="customers" title="customers" value={numberOfCustomers} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestBookings latestBookings={latestBookings} />
      </div>
    </main>
  );
}
