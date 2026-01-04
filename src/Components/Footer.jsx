import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="pt-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 grid-cols-1 gap-12">
        {/* --- Brand Section --- */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              className="w-10 h-10 object-contain transition-transform group-hover:rotate-12"
              src={logo}
              alt="EduLearn"
            />
            <span className="text-2xl font-black text-secondary dark:text-white tracking-tighter">
              Edu<span className="text-primary">Learn</span>
            </span>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            বিশ্বমানের শিক্ষা এখন সবার হাতের মুঠোয়। আমাদের সাথে শিখুন, দক্ষ হোন
            এবং আপনার ক্যারিয়ারকে নিয়ে যান এক নতুন উচ্চতায়।
          </p>
          <div className="flex gap-3">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/profile.php?id=61582048565794",
              },
              { icon: <FaXTwitter />, link: "#" },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/mohammed-abdul-hakim-arman-85b6b438a/",
              },
              { icon: <FaInstagram />, link: "#" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                whileHover={{ y: -5 }}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 text-primary rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-primary hover:text-white transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-sm font-black text-secondary dark:text-white uppercase tracking-[0.2em] mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4">
            {["Home", "Courses", "About Us", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-slate-500 dark:text-slate-400 font-bold hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div>
          <h3 className="text-sm font-black text-secondary dark:text-white uppercase tracking-[0.2em] mb-6">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-500 dark:text-slate-400 font-medium">
              <FaMapMarkerAlt className="mt-1 text-primary shrink-0" />
              <span>
                Oxygen, Chittagong,
                <br />
                Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-medium group">
              <FaPhoneAlt className="text-primary shrink-0" />
              <a
                href="tel:+880123456789"
                className="group-hover:text-primary transition-colors"
              >
                +880 1234 56789
              </a>
            </li>
            <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-medium group">
              <FaEnvelope className="text-primary shrink-0" />
              <a
                href="mailto:support@edulearn.com"
                className="group-hover:text-primary transition-colors"
              >
                support@edulearn.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="mt-16 mb-8 border-slate-200 dark:border-slate-800" />

        {/* --- Copyright Section --- */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm font-bold text-slate-400 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-primary">EduLearn</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
