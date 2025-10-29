import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, WifiOff, ShieldCheck, Smartphone, Brain, Leaf } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      q: "Is Farm360 free to use?",
      a: "Yes! Core features like disease scanning, crop monitoring, and basic treatment suggestions are completely free. Premium plans unlock advanced analytics and offline insights.",
      icon: ShieldCheck,
    },
    {
      q: "How accurate is the disease detection?",
      a: "Our AI model is trained on thousands of real crop images and achieves an impressive 98%+ accuracy rate in identifying diseases and pest infections.",
      icon: Brain,
    },
    {
      q: "Can I use it offline?",
      a: "Yes, you can capture images offline. The app will automatically sync your scans and update results once you're back online.",
      icon: WifiOff,
    },
    {
      q: "What types of crops are supported?",
      a: "Farm360 currently supports a wide variety of crops including rice, wheat, maize, tomato, potato, and more — with new ones added every season.",
      icon: Leaf,
    },
    {
      q: "Do I need any special equipment?",
      a: "No special equipment needed — just your smartphone camera! Farm360 works seamlessly with standard mobile devices.",
      icon: Smartphone,
    },
    {
      q: "How do I get personalized recommendations?",
      a: "Simply scan your crop and share basic field data (like soil type or location). Our AI customizes treatment and yield improvement tips for your farm.",
      icon: HelpCircle,
    },
  ];

  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-gradient-to-b from-ks-green-50 via-white to-ks-amber-50 overflow-hidden">
      {/* Floating blobs for subtle movement */}
      <motion.div
        className="absolute -top-20 left-0 w-72 h-72 bg-ks-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-ks-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-ks-green-100 text-ks-green-800">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-ks-stone-900 sm:text-5xl">
            Got Questions? We’ve Got Answers 🌱
          </h2>
          <p className="mt-4 text-lg text-ks-stone-600 max-w-2xl mx-auto">
            Here’s everything you need to know about Farm360 — your trusted farming companion.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mt-16 space-y-6">
          {faqs.map((faq, i) => {
            const Icon = faq.icon;
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                onClick={() => setActive(isActive ? null : i)}
                className={`relative bg-white/80 backdrop-blur-sm border border-transparent rounded-2xl shadow-md cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isActive ? "border-ks-green-200 shadow-ks-green-100" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-ks-green-100 text-ks-green-600 rounded-full flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900 text-lg">{faq.q}</h3>
                      <motion.span
                        className="text-ks-green-600 text-2xl font-bold ml-4"
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isActive ? "−" : "+"}
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 text-gray-600 leading-relaxed"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
