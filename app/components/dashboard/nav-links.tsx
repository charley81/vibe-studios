import { House, Files, Users } from 'lucide-react';

const links = [
  { name: 'Home', href: '/dashboard', icon: House },
  { name: 'Bookings', href: '/dashboard/bookings', icon: Files },
  { name: 'Clients', href: '/dashboard/clients', icon: Users },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-100 p-3 text-sm font-medium md:flex-none hover:bg-violet-100 hover:text-violet-600  md:justify-start md:p-2"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
