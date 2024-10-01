// components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Effect to toggle 'overflow-hidden' class on body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <nav className='bg-background border-b-4 border-borderColor shadow-custom sticky top-0 z-50'>
      <div className='nav-container flex items-center justify-between px-5 py-3 flex-wrap'>
        {/* Site Title */}
        <h1 className='text-2xl font-bold'>
          <Link
            href='/'
            className='text-textColor no-underline'
            onClick={() => setIsMenuOpen(false)}
          >
            Dev Name
          </Link>
        </h1>

        {/* Navigation Toggle Button */}
        <button
          id='nav-toggle'
          aria-label='Toggle Navigation'
          className='text-2xl focus:outline-none md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className='nav-icon'>🍔</span>
        </button>

        {/* Navigation Links */}
        <div
          className={`nav-links w-full md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center`}
          id='nav-menu'
        >
          <ul className='list-none flex flex-col md:flex-row md:items-center md:space-x-4 md:mt-0'>
            <li className='my-2 md:my-0'>
              <Link
                href='/about'
                className='btn'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className='my-2 md:my-0'>
              <Link
                href='/projects'
                className='btn'
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className='my-2 md:my-0'>
              <Link
                href='/contact'
                className='btn'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className='my-2 md:my-0'>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
