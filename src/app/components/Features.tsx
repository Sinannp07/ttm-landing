export default function Features() {
  const features = [
    {
      title: "Real-Time GPS Tracking",
      desc: "Live location, route history, and geofencing alerts for every vehicle.",
    },
    {
      title: "ELD & Compliance",
      desc: "FMCSA-certified logging with automated HOS and inspection reports.",
    },
    {
      title: "Fuel & Maintenance",
      desc: "Track mileage, detect fuel waste, and schedule service reminders.",
    },
    {
      title: "Driver Safety & Scorecards",
      desc: "Monitor harsh events and improve safety performance with analytics.",
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Fleet Management, Simplified</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((f, index) => (
          <div key={index} className="p-6 rounded-lg bg-[#101726] border border-gray-800 hover:border-[#00C2FF] transition">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
