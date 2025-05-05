import { Banknote, Clock, UsersRound, Library } from 'lucide-react';

const iconMap = {
  collected: Banknote,
  customers: UsersRound,
  pending: Clock,
  bookings: Library
};

// export default async function CardWrapper() {
//   return (
//     <>
//       {/* NOTE Uncomment this code in chapter 9 */}

//       <Card title="collected" value={totalPaidBookings} type="collected" />
//       <Card title="collected" value={totalPendingBookings} type="collected" />
//       <Card title="collected" value={totalPaidBookings} type="collected" />
//       <Card title="collected" value={totalPaidBookings} type="collected" />
//     </>
//   );
// }

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
    <div>
      <div>
        {Icon ? <Icon /> : null}
        <h3>{title}</h3>
      </div>
      <p>{value}</p>
    </div>
  );
}
