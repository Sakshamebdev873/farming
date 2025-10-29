import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Fix 1: Imports ---
// Changed imports from "lucide-react" to our project's "../icons" file
// and corrected the icon component names (e.g., Sprout -> SproutIcon).
// ---
// Corrected the import path again. Assuming `icons.tsx` is in the
// same `src/components/` folder as this file.
import {
  SproutIcon,
  DropletsIcon,
  PhoneIcon,
  BookIcon, // Changed from BookOpen
  ShieldCheckIcon,
  FlaskRoundIcon, // Changed from FlaskRound
  UsersIcon,
  MenuIcon,
  XIcon,
  LogOutIcon, // Added for the logout button
} from 'lucide-react'; // Fixed import path
import { NavLink } from 'react-router';

export const DashboardNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Crop Plans');
  
  const links = [
    { name: 'Crop Plans', icon: SproutIcon, href: 'crop-plans' },
    { name: 'Irrigation', icon: DropletsIcon, href: 'irrigation' },
    { name: 'KVK', icon: PhoneIcon, href: 'kvk' },
    { name: 'Training', icon: BookIcon, href: 'training' },
    { name: 'Disease Control', icon: ShieldCheckIcon, href: 'disease' },
    { name: 'Fertilizer', icon: FlaskRoundIcon, href: 'fertilizer' },
    { name: 'Community', icon: UsersIcon, href: 'community' },
  ];

  return (
    <nav className="bg-linear-to-r from-green-900 via-green-800 to-green-950 backdrop-blur-md shadow-lg sticky top-0 z-50">

      <div className=" mx-auto px-6 flex justify-between items-center h-16 text-white">
        {/* Logo - Fix 2: Changed name to Kisaan Saathi */}
        <a href="/dashboard" className="flex items-center space-x-2 group">
          <SproutIcon className="h-8 w-8 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-xl tracking-wide">
            Kisaan Saathi
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-6">
          {links.map((link) => {
            // --- Fix 3: Use correct Icon components ---
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setActive(link.name)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  active === link.name
                    ? 'bg-white/20 shadow-inner text-amber-200'
                    : 'hover:bg-white/10 hover:text-amber-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </NavLink>
            );
          })}
          {/* Fix 4: Changed "Get Started" to "Logout" to match project context */}
          <a
            href="/auth"
            className="ml-4 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-green-900 font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          >
            <LogOutIcon className="h-5 w-5" />
            Logout
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-amber-300 transition"
        >
          {menuOpen ? (
            <XIcon className="h-7 w-7" />
          ) : (
            <MenuIcon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-green-800 border-t border-green-100 shadow-inner"
          >
            <div className="flex flex-col space-y-2 px-6 py-4">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                      active === link.name
                        ? 'bg-green-100 text-green-700 font-semibold'
                        : 'hover:bg-green-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </a>
                );
              })}
              <a
                href="/auth"
                className="mt-3 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-green-900 font-semibold rounded-lg shadow-md transition-all text-center"
              >
                Logout
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


