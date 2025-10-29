// src/components/HowItWorks.tsx
import { motion } from "framer-motion";
import { CameraIcon, CloudIcon, SproutIcon } from "../icons"; // you can replace with yours

export const HowItWorks = () => {
  const steps = [
    {
      icon: CameraIcon,
      title: "1. Scan the Leaf",
      text: "Take a clear photo of your crop’s leaf using the app or upload an image.",
    },
    {
      icon: CloudIcon,
      title: "2. AI Analyzes It",
      text: "Our AI model detects diseases, deficiencies, and stress in seconds.",
    },
    {
      icon: SproutIcon,
      title: "3. Get Solutions",
      text: "Receive step-by-step remedies and long-term prevention tips instantly.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* background art */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-96 h-96 bg-amber-200 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-green-600 font-semibold tracking-wide uppercase">How It Works</h2>
        <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Simple Steps, Smart Farming
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-20 w-20 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
