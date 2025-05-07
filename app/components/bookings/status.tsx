import { Check, Clock } from 'lucide-react';
import clsx from 'clsx';

export default function BookingStatus({ status }: { status: string }) {
  return (
    <span>
      {status === 'pending' ? (
        <>
          Pending
          <Clock className="ml-1 w-4 text-slate-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <Check className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
