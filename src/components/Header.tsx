'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Pikanami Recipes Logo"
              width={60}
              height={60}
              className="mr-2"
            />
            <h1 className="text-xl font-bold text-gray-800">Pikanami Recipes</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 items-center" aria-label="Main navigation">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link href="/recipes" className="text-gray-600 hover:text-blue-600 transition">Recipes</Link>
          <Link href="/#about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md p-4`}>
        <nav className="space-y-4" aria-label="Mobile navigation">
          <Link href="/" className="block text-gray-600 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/recipes" className="block text-gray-600 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>Recipes</Link>
          <Link href="/#about" className="block text-gray-600 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
        </nav>
      </div>
    </header>
  );
}
