"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Time GPS Tracking",
    desc: "Track every vehicle with live location updates, route history, and driver behavior monitoring.",
  },
  {
    title: "FMCSA & ELD Compliance",
    desc: "Stay compliant with automated log reports, HOS enforcement, and rule-based driver alerts.",
  },
  {
    title: "Fuel & Maintenance Insights",
    desc: "Optimize fleet efficiency with fuel analytics, maintenance reminders, and predictive alerts.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 text-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Powerful Features For Modern Fleet Management
      </motion.h2>

      {/* Feature Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(0,194,255,0.4)",
            }}
            className="bg-[#0F1529] border border-gray-700 p-8 rounded-xl text-left transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
