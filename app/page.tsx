import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '../public/hero-image.png';
import { Button } from './components/ui/button';
import Logo from './components/ui/logo';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-slate-100 p-8">
        <div className="max-w-4xl m-auto">
          <Logo />
        </div>
      </header>
      <section className="flex grow gap-8 items-center md:flex-row p-4 max-w-4xl m-auto">
        <div>
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Welcome to vibe<span className="text-violet-700">Studios</span>{' '}
            booking app
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/login">Log In</Link>
          </Button>
        </div>
        <div className="max-w-full">
          <Image
            src={HeroImage}
            alt="mixing console"
            className="rounded-sm max-w-full"
            height={2731}
            width={4096}
          />
        </div>
      </section>
    </main>
  );
}
