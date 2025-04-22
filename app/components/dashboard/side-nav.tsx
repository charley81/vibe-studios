import Link from 'next/link';
import Logo from '../ui/logo';
import { Power } from 'lucide-react';
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <aside>
      <div>
        <Link href="/" />
        <Logo />
      </div>
      <div>
        <NavLinks />
        <form>
          <button>
            <Power />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
