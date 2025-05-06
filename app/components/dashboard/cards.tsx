import { Banknote, Clock, UsersRound, Library } from 'lucide-react';
import { fetchCardData } from '@/app/lib/data';
const iconMap = {
  collected: Banknote,
  customers: UsersRound,
  pending: Clock,
  bookings: Library
};

export default async function CardWrapper() {
  const {
    totalPaidBookings,
    totalPendingBookings,
    numberOfBookings,
    numberOfCustomers
  } = await fetchCardData();
  return (
    <>
      <Card title="collected" value={totalPaidBookings} type="collected" />
      <Card title="collected" value={totalPendingBookings} type="pending" />
      <Card title="collected" value={numberOfBookings} type="bookings" />
      <Card title="collected" value={numberOfCustomers} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type
}: {
  title: string;
  value: number | string;
  type: 'bookings' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-slate-100 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-slate-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
        {value}
      </p>
    </div>
  );
}
