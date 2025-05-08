import Breadcrumbs from '@/app/components/bookings/breadcrumbs';
import Form from '@/app/components/bookings/edit-form';
import { fetchBookingById, fetchCustomers } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  const [booking, customers] = await Promise.all([
    fetchBookingById(id),
    fetchCustomers()
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bookings', href: '/dashboard/bookings' },
          { label: 'Edit Bookings', href: `/dashboard/bookings/${id}/edit` }
        ]}
      />
      <Form booking={booking} customers={customers} />
    </main>
  );
}
