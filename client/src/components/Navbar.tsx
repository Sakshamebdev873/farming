import React, { useState } from 'react';
import { LogoSvg } from '../icons'; // Import our new logo

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated nav links for a full site
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Features', href: '/features' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center" title="Home">
              <LogoSvg className="h-10 w-10 text-emerald-600" />
              <span className="ml-2 text-2xl font-bold text-stone-800">
                Kisaan Saathi
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-stone-600 hover:text-emerald-600 transition duration-150"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/login"
              className="font-medium text-stone-600 hover:text-emerald-600"
            >
              Login
            </a>
            <a
              href="/signup"
              className="ml-4 px-5 py-2.5 rounded-lg text-white bg-amber-500 hover:bg-amber-600 font-medium shadow-md transition duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-500 hover:text-stone-700 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-700 hover:bg-emerald-50 px-3 py-2 rounded-md font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/login"
              className="text-stone-700 hover:bg-emerald-50 px-3 py-2 rounded-md font-medium"
            >
              Login
            </a>
            <a
              href="/signup"
              className="block w-full text-left px-3 py-2.5 rounded-md text-white bg-amber-500 hover:bg-amber-600 font-medium transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

