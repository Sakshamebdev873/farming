import React from 'react';
// Import the animation library
import { motion, type Variants } from 'framer-motion';

// --- New Dynamic Background Style ---
// We inject the CSS animation for the gradient directly.
const backgroundAnimation = (
  <style>
    {`
      @keyframes moveGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  </style>
);

// --- New Leaf Icon ---
// A simple, elegant leaf icon to use for the animation.
const LeafIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="leafGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#43A047" />
        <stop offset="100%" stopColor="#A5D6A7" />
      </linearGradient>
    </defs>
    <path
      d="M17.01 1.99c-1.57-.6-3.21-.86-4.78-.63-1.6.23-3.11.83-4.39 1.76-3.8 2.77-3.69 8.28.2 10.96.33.22.68.41 1.04.57 1.83.82 3.8.94 5.68.32 1.91-.63 3.57-2.06 4.67-3.96 2.05-3.56 1.25-8.2-1.42-10.9-1.01-.98-2.2-1.68-3.48-2.1l-.1-.03-.22-.07z"
      fill="url(#leafGradient)"
    />
  </svg>
);

// Star icon for the "trust" section
const StarIcon = () => (
  <svg
    className="h-5 w-5 text-ks-amber-400"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Animation Variants for Framer Motion ---
const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Makes children appear one by one
    },
  },
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and 20px down
  visible: {
    opacity: 1,
    y: 0, // Animate to visible and original position
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {backgroundAnimation}

      {/* This is the new "nature-colored" dynamic background.
        It slowly moves between a soft sky blue, a light new-growth green,
        and a warm sunlight/cream color.
      */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, #f0f9ff, #f0fdf4, #fffbeb, #f0f9ff)', // Sky Blue, Leaf Green, Sun/Cream
          backgroundSize: '400% 400%',
          animation: 'moveGradient 25s ease infinite', // Slowed down for a calmer effect
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
            {/* Text Content (Animated with Framer Motion) */}
            <motion.div
              className="lg:col-span-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ks-green-100 text-ks-green-800"
                variants={itemVariants}
              >
                Aapka Smart Farming Saathi
              </motion.span>

              <motion.h1
                className="mt-4 text-4xl tracking-tight font-extrabold text-ks-stone-900 sm:text-5xl md:text-6xl"
                variants={itemVariants}
              >
                <span className="block">Get Instant Crop Advice</span>
                <span className="block text-ks-green-700">
                  Boost Your Yield
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg text-ks-stone-600 sm:text-xl"
                variants={itemVariants}
              >
                Stop guessing, start growing. Kisaan Saathi uses powerful AI to
                instantly identify crop diseases, recommend expert-backed
                treatments, and help you track your farm's health.
              </motion.p>

             <motion.div
  className="mt-10 sm:flex sm:gap-x-4"
  variants={itemVariants}
  initial="hidden"
  animate="visible"
>
  {/* Scan button */}
  <motion.a
    href="#scan"
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(255, 191, 0, 0.5)",
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="inline-block w-full sm:w-auto px-8 py-3.5 rounded-lg text-lg font-semibold text-center text-white bg-green-500 shadow-lg hover:shadow-amber-500/40 focus:outline-none focus:ring-2 focus:ring-ks-amber-500 focus:ring-offset-2 transition-all duration-300 transform"
  >
    Scan Your Crop Now
  </motion.a>

  {/* Learn more button */}
  <motion.a
    href="#features"
    whileHover={{
      scale: 1.05,
      backgroundColor: "#C8E6C9",
      boxShadow: "0px 0px 12px rgba(76, 175, 80, 0.4)",
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="mt-4 sm:mt-0 inline-block w-full sm:w-auto px-8 py-3.5 rounded-lg text-lg font-medium text-center text-ks-green-800 bg-ks-green-100 ring-1 ring-ks-green-200 focus:outline-none focus:ring-2 focus:ring-ks-green-500 focus:ring-offset-2 transition-all duration-300"
  >
    Learn More
  </motion.a>
</motion.div>


              {/* Trust Signals (Also animated) */}
              <motion.div className="mt-12" variants={itemVariants}>
                <div className="flex items-center gap-x-2">
                  <div className="flex -space-x-1">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://placehold.co/32x32/ffc107/ffffff?text=U1"
                      alt="Farmer 1"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://placehold.co/32x32/4caf50/ffffff?text=U2"
                      alt="Farmer 2"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://placehold.co/32x32/2196f3/ffffff?text=U3"
                      alt="Farmer 3"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-ks-stone-600">
                  Rated{' '}
                  <span className="font-bold text-ks-stone-800">4.8/5</span> by
                  over{' '}
                  <span className="font-bold text-ks-stone-800">
                    1,500+ farmers
                  </span>
                  .
                </p>
              </motion.div>
            </motion.div>

            {/* NEW Animated Leaf Constellation with Nature Colors */}
            <div className="relative mt-12 lg:mt-0 lg:col-span-6 flex items-center justify-center h-64 lg:h-full">
              {/* We use Framer Motion to animate a "constellation" of leaves */}
              <motion.div
                className="absolute top-10 left-10 text-ks-green-400" /* New Growth Green */
                animate={{ y: [-5, 10], opacity: [0.3, 1, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <LeafIcon className="w-24 h-24" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 text-ks-green-800" /* Deep Forest Green */
                animate={{ y: [8, -8], opacity: [0.5, 1, 0.5] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                  delay: 0,
                }}
              >
                <LeafIcon className="w-16 h-16" />
              </motion.div>

              <motion.div
                className="absolute bottom-10 right-10 text-ks-amber-400" /* Sunflower/Wheat Yellow */
                animate={{ y: [-10, 5], opacity: [0.4, 1, 0.4] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <LeafIcon className="w-32 h-32" />
              </motion.div>

              <motion.div
                className="absolute top-20 right-20 text-ks-amber-900" /* Earthy Brown */
                animate={{ y: [5, -5], opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                <LeafIcon className="w-12 h-12" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-1/2 right-1/4 text-ks-stone-300" /* Light Stone */
                animate={{ y: [-5, 5], opacity: [0.1, 0.5, 0.1] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                <LeafIcon className="w-20 h-20" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

