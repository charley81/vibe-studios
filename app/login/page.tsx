import Logo from '../components/ui/logo';
import LoginForm from '../components/ui/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <main className="flex flex-col max-w-xl mx-auto md:h-screen">
      <div className="mt-40 mb-8">
        <Logo />
      </div>
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
