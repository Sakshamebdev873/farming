// src/components/Footer.tsx
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="relative bg-linear-to-br from-green-900 via-green-800 to-green-950 text-green-100 pt-16 pb-10 overflow-hidden">
    {/* Decorative overlay */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

    <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
      {/* Brand Section */}
      <div>
        <h2 className="text-2xl font-bold text-white">🌾 Kissan Saathi</h2>
        <p className="mt-4 text-green-200 leading-relaxed">
          Empowering farmers with AI-driven insights, disease detection, and
          smart crop planning — for a greener and more profitable tomorrow.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
        <ul className="space-y-3 text-green-300">
          <li>
            <a
              href="#features"
              className="hover:text-white transition-colors duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#impact"
              className="hover:text-white transition-colors duration-300"
            >
              Impact
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-white transition-colors duration-300"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
        <ul className="space-y-3 text-green-300">
          <li className="flex items-center gap-2">
            <Mail size={18} /> support@farm360.in
          </li>
          <li className="flex items-center gap-2">
            <Phone size={18} /> +91 98765 43210
          </li>
        </ul>
      </div>

      {/* Social Section */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
        <div className="flex gap-5">
          <a
            href="#"
            className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition-all duration-300"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition-all duration-300"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-green-800 mt-12"></div>

    {/* Bottom Bar */}
    <div className="relative text-center mt-6 text-green-400 text-sm z-10">
      © {new Date().getFullYear()} <span className="font-semibold">Farm360</span> — Smart
      Farming for a Sustainable Future 🌱
    </div>
  </footer>
);
