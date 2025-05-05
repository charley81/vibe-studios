import { Card } from '../components/dashboard/cards';
import RevenueChart from '../components/dashboard/revenue-chart';
import LatestBookings from '../components/dashboard/latest-bookings';
import { fetchRevenue, fetchLatestBookings } from '../lib/data';

export default async function DashboarPage() {
  const revenue = await fetchRevenue();
  const latestBookings = await fetchLatestBookings();

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl font-bold">Dashboard</h1>
      {/* <div>
        <Card type="collected"/>
        <Card type="pending"/>
        <Card type="bookings"/>
        <Card type="customers"/>
      </div> */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestBookings latestBookings={latestBookings} />
      </div>
    </main>
  );
}
