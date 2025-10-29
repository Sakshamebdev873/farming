import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Users,
  Leaf,
  Target,
  Globe,
  BarChartBig,
  Sparkles,
} from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

export const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Farmers Supported',
      description:
        'Helping farmers across the nation make smarter, data-driven decisions every day.',
    },
    {
      icon: Leaf,
      number: '1.2M+',
      label: 'Scans Analyzed',
      description:
        'Our AI models have processed over a million crop scans for faster diagnosis.',
    },
    {
      icon: Target,
      number: '98.5%',
      label: 'Diagnostic Accuracy',
      description:
        'Precision detection trusted by farmers and agricultural experts alike.',
    },
    {
      icon: BarChartBig,
      number: '20%+',
      label: 'Avg. Yield Increase',
      description:
        'Consistent improvement in productivity through actionable insights.',
    },
    {
      icon: Sparkles,
      number: '500K+',
      label: 'Treatments Advised',
      description:
        'Delivering organic and chemical treatment suggestions that actually work.',
    },
    {
      icon: Globe,
      number: '5 Regions',
      label: 'Across India',
      description:
        'Trained on crops from varied soil and climate conditions for better accuracy.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from--stone-50 via-white to--green-50 overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg--green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg--amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs text-green-600 font-semibold tracking-wider uppercase bg--green-100 text--green-800">
            Our Impact
          </span>
          <h2 className="mt-4 text-4xl tracking-tight font-extrabold text--stone-900 sm:text-5xl">
            Helping Farmers Grow Stronger
          </h2>
          <p className="mt-6 text-lg text-stone-600 sm:text-xl max-w-3xl mx-auto">
            More than just technology — we’re cultivating hope and prosperity.  
            Together, we’re redefining the future of sustainable farming.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative p-8  bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from--green-200/20 to--amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="p-4 bg--amber-100 text--amber-600 rounded-full inline-block shadow-sm">
                    <Icon className="w-8 text-green-600 h-8" strokeWidth={2.5} />
                  </div>
                  <p className="mt-6 text-5xl font-extrabold text--green-700">
                    {item.number}
                  </p>
                  <p className="mt-2 text-xl font-semibold text--stone-800">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base text--stone-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
