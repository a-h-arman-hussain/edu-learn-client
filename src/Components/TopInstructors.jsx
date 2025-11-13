import React from "react";
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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Meet Our <span className="text-primary">Top Instructors</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto">
            Learn from the best in the industry. Our instructors are experts in
            their fields with years of experience.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-24 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 to-transparent pointer-events-none"></div>

          <div className="flex animate-marquee gap-8 py-5 hover:pause">
            {instructors.concat(instructors).map((instructor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 p-6 text-center flex-shrink-0 w-64"
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={instructor.photo}
                    alt={instructor.name}
                    className="w-full h-full object-cover rounded-full shadow-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {instructor.name}
                </h3>
                <p className="text-gray-500">{instructor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TopInstructors;
