import React from "react";

const traders = [
  {
    name: "Alexander Reynolds",
    role: "CEO & Founder",
    img: "/avatars/alexander.png", // replace with real image paths
  },
  {
    name: "Sophia Zhang",
    role: "CTO",
    img: "/avatars/sophia.png",
  },
  {
    name: "Marcus Johnson",
    role: "COO",
    img: "/avatars/marcus.png",
  },
  {
    name: "Olivia Patel",
    role: "Head of Product",
    img: "/avatars/olivia.png",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-black text-mulyantaran-white py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-mulyantaran-semibold mb-4">
          ✨ Success Stories
        </span>
        <h2 className="text-3xl md:text-4xl font-mulyantaran-bold mb-4">
          Trusted by Leading Traders
        </h2>
        <p className="text-[#B3B3B3] text-lg">
          See how professional traders and institutions are achieving exceptional results with our platform.
        </p>
      </div>

      {/* Traders Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {traders.map((trader, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-yellow-400/40">
              <img
                src={trader.img}
                alt={trader.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-mulyantaran-semibold">{trader.name}</h3>
            <p className="text-[#B3B3B3] text-sm">{trader.role}</p>

            {/* Badges */}
            <div className="flex gap-2 mt-3">
              <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                ✅ Verified
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                Pro Trader
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
