"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Pikanami Recipees Logo"
              width={60}
              height={60}
              className="mr-2"
            />
            <h1 className="text-xl font-bold text-gray-800">
              Pikanami Recipees
            </h1>
          </Link>
        </div>

        {/* Search Bar (Hidden on Mobile) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center flex-1 mx-4 max-w-md"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            placeholder="Search recipes..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search recipes"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
            aria-label="Submit search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                 d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-4.23 6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"
              />
            </svg>
          </button>
        </form>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex space-x-6 items-center"
          aria-label="Main navigation"
        >
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            href="/recipes"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Recipees
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Navigation and Search) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-md p-4`}
      >
        {/* Mobile Search Bar */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search recipes..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search recipes"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
              aria-label="Submit search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Mobile Navigation Links */}
        <nav className="space-y-4" aria-label="Mobile navigation">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 transition block"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="text-gray-600 hover:text-blue-600 transition block"
            onClick={() => setIsMenuOpen(false)}
          >
            Recipees
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 transition block"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-600 transition block"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}