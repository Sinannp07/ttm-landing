"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Request a Free Demo</h2>
      <p className="text-center text-gray-400 mb-12">
        Connect with our fleet specialists to explore how TTM can optimize your operations.
      </p>

      {/* Success Message */}
      {submitted ? (
        <div className="text-center bg-[#092431] border border-[#00C2FF] p-8 rounded-lg text-green-300">
          ✅ Thank you! Our team will contact you shortly.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-[#0D1426] p-8 rounded-lg border border-gray-800"
        >
          <input
            required
            type="text"
            placeholder="Full Name"
            className="p-3 bg-[#101726] border border-gray-700 rounded-lg focus:border-[#00C2FF] outline-none"
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            className="p-3 bg-[#101726] border border-gray-700 rounded-lg focus:border-[#00C2FF] outline-none"
          />
          <input
            type="text"
            placeholder="Company / Fleet Size"
            className="p-3 bg-[#101726] border border-gray-700 rounded-lg focus:border-[#00C2FF] outline-none"
          />

          <button
            type="submit"
            className="bg-[#00C2FF] hover:bg-[#009FCF] text-black font-semibold py-3 rounded-lg transition"
          >
            Request Demo
          </button>
        </form>
      )}
    </section>
  );
}
