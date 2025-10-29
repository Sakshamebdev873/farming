// src/components/Footer.tsx
export const Footer = () => (
  <footer className="bg-green-900 text-green-100 py-12">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-lg font-semibold">Farm360</p>
      <p className="mt-2 text-green-300">
        Smart Farming for a Sustainable Future 🌱
      </p>
      <div className="mt-6 flex justify-center gap-6 text-green-300">
        <a href="#features" className="hover:text-white">Features</a>
        <a href="#impact" className="hover:text-white">Impact</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
      <p className="mt-8 text-sm text-green-400">
        © {new Date().getFullYear()} Farm360. All rights reserved.
      </p>
    </div>
  </footer>
);
