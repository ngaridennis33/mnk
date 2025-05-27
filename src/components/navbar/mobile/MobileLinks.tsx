// components/MobileNav.tsx
import Link from 'next/link';
import { navLinks, actionLinks } from '../data';

interface Props {
  open: boolean;
}

const MobileNav = ({ open }: Props) => {
  if (!open) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-5 space-y-4 md:hidden z-50">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="hover:text-bluegreen hover:underline">
          {link.label}
        </Link>
      ))}
      {actionLinks.map((action) => (
        <Link
          key={action.href}
          href={action.href}
          className={`rounded-xl p-3 ${action.className}`}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;