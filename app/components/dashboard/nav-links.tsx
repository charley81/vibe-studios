'use client';

import { House, Files, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard', icon: House },
  { name: 'Bookings', href: '/dashboard/bookings', icon: Files },
  { name: 'Clients', href: '/dashboard/clients', icon: Users },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-100 p-3 text-sm font-medium md:flex-none hover:text-violet-600  md:justify-start md:p-2',

              {
                'bg-violet-100 text-violet-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
