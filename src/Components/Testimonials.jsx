import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Ali Raza",
      role: "Full Stack Developer",
      image: "https://i.pravatar.cc/150?u=ali",
      feedback:
        "Amazing courses, learned a lot! The project-based approach helped me land my first job.",
    },
    {
      id: 2,
      name: "Sara Khan",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?u=sara",
      feedback:
        "Highly recommend EduLearn to everyone. The community support and mentors are top-notch.",
    },
    {
      id: 3,
      name: "Rafiq Ahmed",
      role: "Data Analyst",
      image: "https://i.pravatar.cc/150?u=rafiq",
      feedback:
        "Instructors are very supportive. The curriculum is always updated with the latest industry trends.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-base-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary">
            What Our Students Say
          </h3>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-indigo-50 transition-colors">
                <FaQuoteLeft size={40} />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" size={14} />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-neutral italic mb-8 relative z-10 leading-relaxed">
                "{r.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover"
                />
                <div>
                  <h4 className="font-bold text-secondary">{r.name}</h4>
                  <p className="text-xs text-neutral font-medium">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
