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
          <a key={link.name} href={link.href}>
            <LinkIcon />
            <p>{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
