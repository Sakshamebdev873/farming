// src/components/Features.tsx
import { motion, type Variants } from "framer-motion";
import { LeafScanIcon, ChartIcon, CheckCircleIcon } from "../icons";

export const Features = () => {
  const features = [
    {
      icon: LeafScanIcon,
      title: "Instant Disease Detection",
      description:
        "Snap a photo of any leaf and get an immediate diagnosis of its health and potential diseases.",
    },
    {
      icon: CheckCircleIcon,
      title: "Expert Treatment Plans",
      description:
        "Receive clear, actionable steps with both organic and chemical treatment options tailored to your crop.",
    },
    {
      icon: ChartIcon,
      title: "Monitor Crop Health",
      description:
        "Save your scans and track your crop's recovery and health over time, all in one simple dashboard.",
    },
  ];

  const containerVariants : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const cardVariants : Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* 🌿 Soft background gradient art */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-40 w-96 h-96 bg-gradient-to-tr from-green-200 to-emerald-400 rounded-full opacity-30 blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200 to-yellow-300 rounded-full opacity-30 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🌾 Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold text-green-600 uppercase tracking-wide">
            Core Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything You Need to Farm Smarter
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Farm360 isn't just an app — it's your partner in the field.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: [-1, 1, -1],
                boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="flex flex-col items-center text-center p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-green-100"
            >
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 shadow-inner"
                >
                  <feature.icon className="h-10 w-10" />
                </motion.div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
