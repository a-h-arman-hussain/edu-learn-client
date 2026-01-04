import React from "react";
import { Link } from "react-router"; // বা react-router-dom
import { FiArrowRight, FiUsers } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="mt-15">
      <div className="max-w-7xl mx-auto relative overflow-hidden bg-secondary rounded-[2.5rem] p-10 shadow-2xl">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 blur-[100px] -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-10 blur-[100px] -ml-20 -mb-20"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Social Proof Badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/10">
            <FiUsers className="text-primary" />
            <span className="text-white/80 text-xs font-medium tracking-wide uppercase">
              Join 10,000+ Active Students
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Ready to <span className="text-primary">Accelerate</span> Your
            Learning Journey?
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl">
            Access world-class courses, expert mentors, and a community that
            supports your growth every step of the way.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/auth/register"
              className="bg-primary hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-500/20 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started Now
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/courses"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold transition-all duration-300"
            >
              Explore Catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
