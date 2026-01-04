import React from "react";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import arman from "../assets/arman.jpg";
import saim from "../assets/saim.jpg";
import raihan from "../assets/raihan.jpg";
import sifat from "../assets/sifat.jpg";

const instructors = [
  { name: "A H Arman Hussain", role: "Full Stack Developer", photo: arman },
  { name: "Abdul Karim Saim", role: "UI/UX Designer", photo: saim },
  { name: "Mesbah Uddin Raihan", role: "Data Scientist", photo: raihan },
  { name: "Abdur Rahman Sifat", role: "AI Specialist", photo: sifat },
];

const TopInstructors = () => {
  return (
    <section className="mt-15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Expert Mentors
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary">
            Meet Our <span className="text-primary">Top Instructors</span>
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Learn from the best in the industry. Our instructors are experts
            with years of real-world experience.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative group">
          {/* Marquee Motion */}
          <div className="flex animate-marquee gap-8 group-hover:[animation-play-state:paused]">
            {[...instructors, ...instructors].map((instructor, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-secondary hover:border-primary shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 p-4 text-center flex-shrink-0 w-72 group/card"
              >
                {/* Image Wrap */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 group-hover/card:scale-125 transition-transform duration-500"></div>
                  <img
                    src={instructor.photo}
                    alt={instructor.name}
                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>

                {/* Info */}
                <h4 className="text-xl font-bold text-secondary group-hover/card:text-primary transition-colors">
                  {instructor.name}
                </h4>
                <p className="font-medium text-sm mb-6 uppercase tracking-wider">
                  {instructor.role}
                </p>

                {/* Social Placeholder */}
                <div className="flex justify-center gap-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <button className="p-2 hover:bg-primary hover:text-white rounded-lg transition-all">
                    <FaLinkedin size={18} />
                  </button>
                  <button className="p-2 hover:bg-primary hover:text-white rounded-lg transition-all">
                    <FaGlobe size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
