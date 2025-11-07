import "./globals.css";

export const metadata = {
  title: "TTM — Fleet Management",
  description: "Real-time fleet tracking, ELD compliance & telematics platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0F1E] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
