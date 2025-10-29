// src/components/Testimonials.tsx
import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ravi Sharma",
      location: "Punjab, India",
      quote:
        "Farm360 saved my entire tomato crop! The AI diagnosis was spot on and easy to follow.",
    },
    {
      name: "Neha Patil",
      location: "Maharashtra, India",
      quote:
        "The app helps me track my crop health weekly. It’s like having an expert in my pocket.",
    },
    {
      name: "Karan Singh",
      location: "Uttarakhand, India",
      quote:
        "Beautiful UI, fast results, and so reliable. My yield improved by 25% this season.",
    },
  ];

  return (
    <section className="relative py-24 g from-amber-50 via-white to-green-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-green-600 font-semibold uppercase tracking-wide">
          Testimonials
        </h2>
        <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Farmers Who Believe in Farm360
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
