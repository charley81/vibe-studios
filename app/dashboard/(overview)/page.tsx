import RevenueChart from '../../components/dashboard/revenue-chart';
import LatestBookings from '../../components/dashboard/latest-bookings';
import CardWrapper from '@/app/components/dashboard/cards';
import {
  RevenueChartSkeleton,
  LatestBookingsSkeleton,
  CardSkeleton
} from '@/app/components/dashboard/skeletons';
import { Suspense } from 'react';

export default async function DashboarPage() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestBookingsSkeleton />}>
          <LatestBookings />
        </Suspense>
      </div>
    </main>
  );
}
