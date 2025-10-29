// src/App.tsx
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Impact } from './components/Impact';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';

// This is now the "Homepage"
// Later, you will replace Hero and Features with other components
// based on the URL (using React Router)
function Homepage() {
  return (
    <main>
      <Hero />
      <Features />
      <Impact/>
      <HowItWorks/>
      <Testimonials/>
      <FAQ/>
    </main>
  );
}

// This is your main layout file
export default function App() {
  return (
    <div className="min-h-screen bg-green-50/20 font-sans text-gray-900">
      <Navbar />
      
      {/* This is where you'll add React Router.
        For now, we are just rendering the Homepage.
      */}
      <Homepage />
      
      <Footer />
    </div>
  );
}