"use client";

export default function Contact() {
  return (
     <form className="flex flex-col gap-4 bg-[#0F1529] p-6 rounded-lg shadow-lg border border-gray-700">
      <input
        type="text"
        placeholder="Your Name"
        className="bg-transparent border border-gray-600 px-4 py-3 rounded-md focus:border-[#00C2FF] outline-none"
      />

      <input
        type="email"
        placeholder="you@example.com"
        className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-600 focus:border-[#00C2FF] outline-none"
      />

      <textarea
        placeholder="How can we help you?"
        rows={4}
        className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-600 focus:border-[#00C2FF] outline-none resize-none"
      />

      <button
        type="submit"
        className="w-full bg-[#00C2FF] hover:bg-[#009FCF] text-black font-semibold py-3 rounded-lg transition"
      >
        Submit
      </button>
    </form>
  );
}
