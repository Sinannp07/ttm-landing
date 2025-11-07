"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function CaseStudy() {
  const { ref: aRef, inView: aIn } = useInView();
  const { ref: bRef, inView: bIn } = useInView();
  const { ref: cRef, inView: cIn } = useInView();

  return (
    <section id="case-study" className="bg-[#0A0F1E] text-white">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pt-24">
        <div
          ref={aRef}
          className={`transition-all duration-700 ${
            aIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[#00C2FF] text-sm tracking-widest uppercase">
            Case Study
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
            TTM Fleet Management — Landing Page
          </h2>
          <p className="mt-3 text-gray-300 max-w-3xl">
            A production-ready, responsive landing page for a U.S. transport technology
            company. Built to showcase telematics, ELD compliance, safety analytics, and
            fleet efficiency — optimized for conversions and performance.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-8 md:grid-cols-3">
        {/* Overview */}
        <div
          ref={bRef}
          className={`rounded-2xl border border-gray-800 bg-[#0D1426] p-6 transition-all duration-700 ${
            bIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-lg font-semibold">Overview</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>• Role: Frontend Developer</li>
            <li>• Timeline: 1 week</li>
            <li>• Company: TTM (Oak Hills, CA, USA)</li>
            <li>• Goal: Modern, responsive landing with lead capture</li>
          </ul>

          <h4 className="mt-6 text-sm uppercase tracking-wider text-gray-400">
            Tech Stack
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Next.js 14", "React 18", "Tailwind CSS", "Vercel"].map((t) => (
              <span
                key={t}
                className="rounded-lg bg-[#101726] px-3 py-1 text-xs border border-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Problem → Solution */}
        <div
          className={`rounded-2xl border border-gray-800 bg-[#0D1426] p-6 transition-all duration-700 delay-100 ${
            bIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-lg font-semibold">Problem → Solution</h3>
          <p className="mt-3 text-sm text-gray-300">
            <span className="font-medium text-white">Problem:</span> TTM needed a fast,
            high-quality marketing surface that communicates value (ELD, telematics,
            safety, fuel, analytics) and captures demo requests.
          </p>
          <p className="mt-3 text-sm text-gray-300">
            <span className="font-medium text-white">Solution:</span> A performant,
            SEO-friendly landing page with modern hero, features, benefits/metrics, and a
            frictionless contact form. Clean semantics, accessible focus states, and
            responsive layout across devices.
          </p>

          <h4 className="mt-6 text-sm uppercase tracking-wider text-gray-400">
            My Responsibilities
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-300">
            <li>• UX structure & component architecture</li>
            <li>• Dark theme & brand styling</li>
            <li>• Responsive grid & accessibility</li>
            <li>• Deployment & documentation</li>
          </ul>
        </div>

        {/* Outcomes + Links */}
        <div
          ref={cRef}
          className={`rounded-2xl border border-gray-800 bg-[#0D1426] p-6 transition-all duration-700 delay-200 ${
            cIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-lg font-semibold">Outcomes</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>• Lighthouse-friendly performance & SEO basics</li>
            <li>• Clean commit history & feature branches</li>
            <li>• Production deploy on Vercel</li>
          </ul>

          <div className="mt-6 rounded-xl border border-gray-800 bg-[#091224] p-4">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Quick Metrics
            </p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-[#00C2FF] font-bold text-xl">~100</div>
                <div className="text-[11px] text-gray-400">Performance</div>
              </div>
              <div>
                <div className="text-[#00C2FF] font-bold text-xl">A11y</div>
                <div className="text-[11px] text-gray-400">Semantic</div>
              </div>
              <div>
                <div className="text-[#00C2FF] font-bold text-xl">SEO</div>
                <div className="text-[11px] text-gray-400">Meta/OG</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://ttm-landing-eta.vercel.app"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-[#00C2FF] px-4 py-2 font-semibold text-black hover:bg-[#00aee0]"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Sinannp07/ttm-landing"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-4 py-2 font-semibold hover:bg-white/5"
            >
              GitHub Repo
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Designed & built by <span className="text-white font-medium">Muhammed Sinan NP</span>
          </p>
        </div>
      </div>
    </section>
  );
}
