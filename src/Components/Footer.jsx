import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-10 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <img className="w-8" src={logo} alt="" />
            <span>EduLearn</span>
          </Link>
          <p className="mt-3 text-gray-500">
            Empowering learners worldwide with accessible, high-quality
            education. Learn, grow, and succeed with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-primary duration-300">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-primary duration-300">FAQ</Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61582048565794"
              className="p-2 bg-primary text-white rounded-full hover:scale-110 duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-primary text-white rounded-full hover:scale-110 duration-300"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-abdul-hakim-arman-85b6b438a/"
              className="p-2 bg-primary text-white rounded-full hover:scale-110 duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-primary text-white rounded-full hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">EduLearn</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
