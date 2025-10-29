import{ useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoSvg } from "../icons";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Impact", href: "#impact" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <LogoSvg className="h-10 w-10 text-emerald-600" />
              <span className="ml-2 text-2xl font-bold bg-linear-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">
                Kisaan Saathi
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-stone-700 font-medium hover:text-emerald-600 transition duration-200 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/auth"
              className="ml-6 px-5 py-2.5 rounded-lg bg-linear-to-r from-amber-500 to-amber-600 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-600 hover:text-emerald-600 p-2 rounded-md focus:outline-none"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-stone-100 shadow-md overflow-hidden"
          >
            <div className="flex flex-col px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-stone-700 hover:bg-emerald-50 px-3 py-2 rounded-md font-medium transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#get-started"
                className="block text-center mt-3 px-5 py-3 rounded-lg bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
