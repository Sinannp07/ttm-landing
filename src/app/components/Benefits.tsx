"use client";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Lower Operating Costs",
    desc: "Reduce fuel usage, eliminate idling, and optimize routing to cut expenses across your fleet.",
  },
  {
    title: "Improve Driver Safety",
    desc: "AI-powered driver behavior alerts help maintain compliance and reduce accident risks.",
  },
  {
    title: "Increase Operational Efficiency",
    desc: "Get real-time analytics, automated logs, and actionable insights to make smarter decisions.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-[#0C1224] text-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Why Fleets Choose TTM
      </motion.h2>

      {/* Benefit Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.18,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(0,194,255,0.35)",
            }}
            className="bg-[#0F1529] border border-gray-700 p-8 rounded-xl transition text-left cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
            <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
