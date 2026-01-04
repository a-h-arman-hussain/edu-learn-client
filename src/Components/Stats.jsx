import React from "react";
import { FiUsers, FiBookOpen, FiStar } from "react-icons/fi";

export default function Stats() {
  const stats = [
    {
      id: 1,
      number: "10,000+",
      label: "Active Students",
      icon: <FiUsers className="text-primary" size={24} />,
      bgColor: "bg-indigo-50",
    },
    {
      id: 2,
      number: "50+",
      label: "Expert Courses",
      icon: <FiBookOpen className="text-blue-500" size={24} />,
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      number: "4.9",
      label: "Average Rating",
      icon: <FiStar className="text-amber-500" size={24} />,
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Impact in Numbers
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary">
            Our Achievements
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div
              key={s.id}
              className="relative p-8 rounded-3xl border hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 group overflow-hidden"
            >
             

              <div className="relative z-10 flex flex-col items-center">
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 ${s.bgColor} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform`}
                >
                  {s.icon}
                </div>

                {/* Number */}
                <p className="text-4xl md:text-5xl font-black text-secondary mb-2 tracking-tight">
                  {s.number}
                </p>

                {/* Label */}
                <p className="font-medium uppercase text-xs tracking-widest">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
