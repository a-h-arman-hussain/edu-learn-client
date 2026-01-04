import React from "react";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

export default function Awards() {
  const awards = [
    {
      title: "Best EdTech 2025",
      org: "Global Tech Forum",
      icon: <FaTrophy className="text-amber-500" size={32} />,
    },
    {
      title: "Top Online Platform",
      org: "Education Excellence",
      icon: <FaMedal className="text-primary" size={32} />,
    },
    {
      title: "Innovation in Edu",
      org: "Innovate Global",
      icon: <FaAward className="text-success" size={32} />,
    },
  ];

  return (
    <section className="mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Awards & Recognition
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 bg-slate-50 rounded-full group-hover:bg-indigo-50 transition-colors">
                {award.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-1">
                {award.title}
              </h3>
              <p className="text-sm font-medium italic">
                {award.org}
              </p>

              {/* Decorative line on hover */}
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
