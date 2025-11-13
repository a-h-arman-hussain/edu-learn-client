import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "✅ Message Sent",
      text: "Thank you! Your message has been successfully submitted.",
      timer: 2000,
      showConfirmButton: false,
    });
    e.target.reset();
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <title>EduLearn | Contact</title>
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl sm:text-5xl font-extrabold text-center mb-4 md:mb-6">
        Contact <span className="text-primary">Us</span>
      </h1>

      {/* Intro */}
      <p className="text-center mb-12 text-lg">
        Have questions or feedback? Reach out to us and we’ll get back to you as
        soon as possible.
      </p>
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
      >
        {/* Name */}
        <div>
          <label className="block text-primary font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
            className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-primary font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        {/* Subject */}
        <div>
          <label className="block text-primary font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        {/* Message */}
        <div>
          <label className="block text-primary font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Write your message..."
            className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-semibold"
        >
          Send Message
        </button>
      </form>
      <div className="mt-12 text-center">
        <p>Email: aharmanhussain@gmail.com</p>
        <p>Phone: +880 131 531 5449</p>
        <p>Address: Oxygen, Chittagong, Bangladesh</p>
      </div>
    </div>
  );
};

export default Contact;
