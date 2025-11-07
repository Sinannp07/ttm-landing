export default function Benefits() {
  const stats = [
    { value: "12,500+", label: "Active Vehicles Tracked" },
    { value: "18%", label: "Reduction in Idle Time" },
    { value: "$1.4M+", label: "Annual Fuel Savings" },
    { value: "99.9%", label: "System Uptime SLA" }
  ];

  return (
    <section className="py-24 px-6 border-t border-gray-800 bg-[#0D1426]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Drive Efficiency at Fleet Scale</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-14">
          TTM enables logistics operators to reduce operational costs, improve driver safety,
          and ensure full regulatory compliance across diverse fleet environments.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-[#00C2FF]">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
