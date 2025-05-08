import Form from '@/app/components/bookings/create-form';
import Breadcrumbs from '@/app/components/bookings/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function CreatePage() {
  const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bookings', href: '/dashboard/bookings' },
          {
            label: 'Create Booking',
            href: '/dashboard/bookings/create',
            active: true
          }
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
