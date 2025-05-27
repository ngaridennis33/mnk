// components/DesktopNav.tsx
import Link from 'next/link';
import { navLinks, actionLinks } from '../data';

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center justify-between flex-1 space-x-6">
      <div className="flex space-x-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-bluegreen hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex space-x-4">
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
    </div>
  );
};

export default DesktopNav;