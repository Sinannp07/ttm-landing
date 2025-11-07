"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";

export default function Home() {
  // Parallax motion values
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const moveX = useTransform(offsetX, [-200, 200], [-15, 15]);
  const moveY = useTransform(offsetY, [-200, 200], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { innerWidth, innerHeight } = window;
    offsetX.set(e.clientX - innerWidth / 2);
    offsetY.set(e.clientY - innerHeight / 2);
  }

  useEffect(() => {
    offsetX.set(0);
    offsetY.set(0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <motion.section
        onMouseMove={handleMouseMove}
        style={{ x: moveX, y: moveY }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="flex flex-col items-center text-center px-6 pt-36 pb-24 select-none"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-bold max-w-4xl leading-tight bg-gradient-to-r from-white to-[#00C2FF] bg-clip-text text-transparent"
        >
          Real-Time Fleet Tracking, ELD Compliance & Telematics
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-300 max-w-2xl"
        >
          Monitor vehicles, reduce fuel costs, automate reports, and stay FMCSA compliant
          with TTM’s all-in-one fleet management platform.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 30px rgba(0,194,255,0.65)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#00C2FF] hover:bg-[#00A8D7] text-black font-semibold px-7 py-3 rounded-xl shadow-lg transition"
        >
          Request Free Demo
        </motion.button>
      </motion.section>

      <Features />
      <Benefits />

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
        <div className="w-full max-w-2xl px-6">
          <Contact />
        </div>
      </section>
    </main>
  );
}
