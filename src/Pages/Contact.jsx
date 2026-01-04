import React from "react";
import Swal from "sweetalert2";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiInfo,
} from "react-icons/fi";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "✅ Message Sent",
      text: "Thank you! Your message has been successfully submitted.",
      confirmButtonColor: "#4338ca",
      timer: 2000,
      showConfirmButton: false,
    });
    e.target.reset();
  };

  const inputStyle =
    "w-full border border-secondary text-secondary px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-slate-400";
  const labelStyle =
    "flex items-center gap-2 text-sm font-bold text-secondary mb-2 uppercase tracking-wide";

  return (
    <div className="min-h-screen py-20 px-6">
      <title>EduLearn | Contact</title>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-secondary">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg">
            আপনার যেকোনো প্রশ্ন বা ফিডব্যাক আমাদের জানান। আমরা দ্রুততম সময়ে
            আপনার সাথে যোগাযোগ করব।
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-primary p-10 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Contact Information
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-100 font-medium">
                      Email Us
                    </p>
                    <p className="font-semibold">aharmanhussain@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-100 font-medium">
                      Call Us
                    </p>
                    <p className="font-semibold">+880 131 531 5449</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-100 font-medium">
                      Visit Us
                    </p>
                    <p className="font-semibold">
                      Oxygen, Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 border border-secondary p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className={labelStyle}>
                  <FiUser className="text-primary" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Full Name"
                  className={inputStyle}
                />
              </div>

              <div className="md:col-span-1">
                <label className={labelStyle}>
                  <FiMail className="text-primary" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className={inputStyle}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyle}>
                  <FiInfo className="text-primary" /> Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className={inputStyle}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyle}>
                  <FiSend className="text-primary" /> Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message here..."
                  className={`${inputStyle} resize-none`}
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-md hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  Send Message <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;