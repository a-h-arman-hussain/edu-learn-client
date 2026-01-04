import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher size={26} />,
    title: "Expert Instructors",
    description:
      "Learn from industry experts with years of real-world experience and deep knowledge.",
    color: "bg-indigo-50 text-primary",
  },
  {
    icon: <FaLaptopCode size={26} />,
    title: "Hands-on Projects",
    description:
      "Work on real-world projects to build practical skills and a professional portfolio.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaUsers size={26} />,
    title: "Community Support",
    description:
      "Join a vibrant community of learners and mentors to collaborate and grow together.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <FaCertificate size={26} />,
    title: "Certified Courses",
    description:
      "Get verified certificates to showcase your skills and achievements to employers.",
    color: "bg-amber-50 text-amber-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mt-15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Core Benefits
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary mb-6">
            Why Choose <span className="text-primary">EduLearn</span>?
          </h3>
          <div className="w-20 h-1.5 bg-primary/20 mx-auto rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-primary rounded-full"></div>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the benefits of learning with us. We combine quality,
            expertise, and community to make your learning journey effective.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 border border-secondary hover:border-primary rounded-[2rem] hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon Container */}
              <div
                className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle Bottom Accent */}
              <div className="mt-6 w-8 h-1 bg-slate-300 group-hover:w-full group-hover:bg-primary/20 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
