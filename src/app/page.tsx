import Header from "./components/Header";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white">
      <Header />

      <section className="flex flex-col items-center justify-center text-center px-6 pt-32">
        <h1 className="text-5xl font-bold leading-tight max-w-3xl">
          Real-Time Fleet Tracking, ELD Compliance & Telematics
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Monitor vehicles, reduce fuel costs, automate reports, and stay FMCSA compliant with TTM’s all-in-one fleet management platform.
        </p>

        <button className="mt-6 bg-[#00C2FF] hover:bg-[#009FCF] text-black px-6 py-3 rounded-lg shadow-lg text-lg">
          Request Free Demo
        </button>
      </section>
      <Features />
      <Benefits />
      <Contact />
    </main>
  );
}
