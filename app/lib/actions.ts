'use server';

export async function createBooking(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  };

  console.log(rawFormData);
}
