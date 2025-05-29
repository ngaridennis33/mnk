"use client"
// components/DesktopNav.tsx
import Link from 'next/link';
import { navLinks } from '../data';
import { useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
      <Link href={href} passHref>
          <span
              onClick={onClick}
              className="px-3 py-4 text-lg font-normal"
          >
              {children}
          </span>
      </Link>
  );
};

const DesktopNav = () => {
  const [currentLink, setCurrentLink] = useState('/');
  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
};
  return (
    <div className="hidden md:flex items-center justify-between flex-1 space-x-6">
      <div className="flex space-x-6">
        {navLinks.map((link) => (
          <CustomLink
                                            key={link.label}
                                            href={link.href}
                                            onClick={() => handleLinkClick(link.href)}
                                        >
                                            <span
                                                className={classNames(
                                                    link.href === currentLink ? 'underline-links' : 'text-slategray',
                                                    'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                                                )}
                                                aria-current={link.href ? 'page' : undefined}
                                            >
                                                {link.label}
                                            </span>
                                        </CustomLink>
        ))}
      </div>
      <div className="flex space-x-4">
        
          <button className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded">
          Donate
        </button>
      </div>
    </div>
  );
};

export default DesktopNav;