import Link from 'next/link';
import Logo from '../ui/logo';
import { Power } from 'lucide-react';
import NavLinks from './nav-links';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <aside className="flex h-full flex-col p-4 md:p-2">
      <Link
        href="/"
        className="flex bg-slate-100 mb-2 h-20 p-4 rounded-sm items-center justify-start"
      >
        <Logo />
      </Link>
      <div className="flex grow  flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-sm bg-slate-100 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-sm bg-slate-100 p-2 text-sm font-medium hover:bg-violet-100 hover:text-violet-600 md:flex-none md:justify-start">
            <Power />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </aside>
  );
}
