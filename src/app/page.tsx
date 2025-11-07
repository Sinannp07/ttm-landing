import Header from "./components/Header";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      <Header />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center px-6 pt-32"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-bold leading-tight max-w-3xl"
        >
          Real-Time Fleet Tracking, ELD Compliance & Telematics
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg text-gray-300 max-w-2xl"
        >
          Monitor vehicles, reduce fuel costs, automate reports, and stay FMCSA
          compliant with TTM’s all-in-one fleet management platform.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.06, boxShadow: "0px 0px 18px #00C2FF" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-6 bg-[#00C2FF] hover:bg-[#009FCF] text-black px-6 py-3 rounded-lg text-lg font-medium"
        >
          Request Free Demo
        </motion.button>
      </motion.section>

      {/* FEATURES SECTION (Fade-in On Scroll) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="features"
      >
        <Features />
      </motion.div>

      {/* BENEFITS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="benefits"
      >
        <Benefits />
      </motion.div>

      {/* CONTACT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="contact"
      >
        <Contact />
      </motion.div>
    </main>
  );
}
