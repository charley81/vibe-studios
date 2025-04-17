import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '../public/hero-image.jpg';
import { Button } from './components/ui/button';

export default function Home() {
  return (
    <main>
      <header className="bg-slate-100 p-8">
        <div className="max-w-4xl m-auto">
          <h3 className="text-3xl font-bold">
            vibe<span className="text-violet-700">Studios</span>
          </h3>
        </div>
      </header>
      <section className="grid gap-8 items-center md:grid-cols-2 mt-20 p-4 max-w-4xl m-auto">
        <div>
          <p className="text-3xl sm:text-4xl md:text-6xl">
            <strong>Welcome to vibeStudios </strong>
            booking app
          </p>
          <Button asChild className="mt-4" size="lg">
            <Link href="/login">Log In</Link>
          </Button>
        </div>
        <div className="max-w-full">
          <Image
            src={HeroImage}
            alt="man playing a guitar"
            className="rounded-xl max-w-full"
            height={3000}
            width={2000}
          />
        </div>
      </section>
    </main>
  );
}
