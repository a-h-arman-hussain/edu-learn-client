import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <title>EduLearn | AboutUs</title>
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl sm:text-5xl font-extrabold text-center mb-8">
        About <span className="text-primary">Us</span>
      </h1>

      {/* Intro */}
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
        We are dedicated to providing high-quality online courses to help
        learners achieve their goals. Our mission is to empower people through
        knowledge, skills, and hands-on learning experiences.
      </p>

      {/* Features / Mission Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl text-primary font-bold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            Empower learners worldwide by providing accessible and top-quality
            education.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl text-primary font-bold mb-3">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading platform for skill development and online learning
            globally.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl text-primary font-bold mb-3">Our Values</h2>
          <p className="text-gray-600">
            Quality, innovation, inclusivity, and lifelong learning are at the
            heart of everything we do.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <img
          src="https://media.istockphoto.com/id/1286378180/vector/website-information-concept.jpg?s=612x612&w=0&k=20&c=6v9Hcbp0zp5itIPIywobPQF13YsHIQ4j_srF5VbQusY="
          alt="About Us Illustration"
          className="w-full max-w-lg rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default AboutUs;
