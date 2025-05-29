// components/MobileNav.tsx
import Link from 'next/link';
import { navLinks } from '../data';

interface Props {
  open: boolean;
}

const MobileNav = ({ open }: Props) => {
  if (!open) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-5 space-y-4 md:hidden z-50">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="hover:text-bluegreen hover:underline">
          {link.label}
        </Link>
      ))}
     <div className="flex space-x-4">
        
        <button className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded">
        Donate
      </button>
    </div>
    </div>
  );
};

export default MobileNav;