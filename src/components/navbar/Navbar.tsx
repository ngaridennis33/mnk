'use client';

import Image from 'next/image';
import { useState } from 'react';
import DesktopNav from './desktop/DesktopLinks';
import MobileNav from './mobile/MobileLinks';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-grey shadow">
      <div className="max-w-screen-xl mx-auto px-5 pt-5 pb-4 flex gap-5 items-center justify-between relative">
        {/* Logo */}
        <div className="h-16 flex items-center">
          <Image
            className="h-full w-auto object-contain"
            src="/icons/logo.svg"
            width={160}
            height={64}
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Hamburger (Mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-white"
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav open={open} />
    </nav>
  );
};

export default NavBar;