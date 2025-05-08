import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Check, Clock, CircleDollarSign, CircleUserRound } from 'lucide-react';
import { Button } from '../ui/button';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form>
      <div className="rounded-md bg-slate-50 p-4 md:p-6">
        {/* customer name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              name="customerId"
              id="customer"
              className="peer block w-full cursor-pointer rounded-md border border-slate-200 py-2 pl-10 text-sm outline-2 placeholder:text-slate-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
}
