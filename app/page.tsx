import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <header>
        <h3>vibeStudios</h3>
      </header>
      <div>
        <div>
          <p>
            <strong>Welcome to vibeStudios </strong>
            booking application
          </p>
          <Link href="/login">Log In</Link>
        </div>
        <img src="/hero.svg" alt="playing a guitar" />{' '}
        {/**TODO: Change to component */}
      </div>
    </main>
  );
}
