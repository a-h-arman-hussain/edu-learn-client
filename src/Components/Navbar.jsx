import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = use(AuthContext) || {};
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logOut?.();
    setOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold border-b-2 border-primary"
              : "hover:text-primary transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold border-b-2 border-primary"
              : "hover:text-primary transition"
          }
        >
          All Courses
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50  md:px-10">
      {/* LEFT */}
      <div className="navbar-start gap-3">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-56 space-y-1"
          >
            {navLinks}
          </ul>
        </div>

        <Link
          to="/"
          className="flex items-center text-2xl font-extrabold text-primary tracking-wide"
        >
          <img className="w-10" src={logo} alt="" />
          <span className="hidden sm:block">EduLearn</span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 font-medium">{navLinks}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end relative flex items-center gap-2 justify-end">
        <div className="flex items-center gap-2 border border-primary rounded-lg px-2 py-1 cursor-pointer">
          <label
            htmlFor="theme-toggle"
            className="font-medium text-base cursor-pointer select-none"
          >
            Theme
          </label>

          <label className="swap swap-rotate cursor-pointer">
            <input
              id="theme-toggle"
              type="checkbox"
              onChange={(e) => handleTheme(e.target.checked)}
            />

            <FaMoon className="swap-off text-blue-500 text-xl" />

            <FaSun className="swap-on text-yellow-400 text-xl" />
          </label>
        </div>
        <div>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="btn btn-ghost btn-circle avatar cursor-pointer"
              >
                <div className="rounded-full border-2 border-primary overflow-hidden bg-gray-100 hover:scale-110 transition-transform duration-200">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <FaUserCircle className="text-4xl text-gray-400" />
                  )}
                </div>
              </button>

              {open && (
                <ul className="absolute right-0 mt-3 p-4 shadow-lg bg-white rounded-xl w-64 border border-gray-200 flex flex-col gap-3 z-50">
                  <div className="flex items-center gap-3 border-b pb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="user"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <FaUserCircle className="text-2xl text-gray-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        {user.displayName}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <NavLink
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `btn btn-outline px-3 py-2 rounded-lg text-primary hover:bg-primary hover:text-white hover:border-none transition ${
                        isActive ? "bg-primary text-white font-semibold" : ""
                      }`
                    }
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `btn btn-outline px-3 py-2 rounded-lg text-primary hover:bg-primary hover:text-white hover:border-none transition ${
                        isActive ? "bg-primary text-white font-semibold" : ""
                      }`
                    }
                  >
                    <CgProfile size={20} />
                    View Profile
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition cursor-pointer"
                  >
                    <span className="flex justify-center items-center gap-1">
                      <FiLogOut />
                      Logout
                    </span>
                  </button>
                </ul>
              )}
            </div>
          ) : (
            <motion.div
              className="rounded-xl p-[2px] overflow-hidden w-30"
              animate={{
                backgroundPositionX: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3B82F6, #06B6D4, #3B82F6)",
                backgroundSize: "300% 100%",
              }}
            >
              <Link
                to="/auth/login"
                className="block text-center text-white py-2 rounded-lg font-semibold hover:text-gray-300 transition-colors duration-300"
              >
                <span className="flex justify-center items-center gap-1">
                  <FiLogIn />
                  Login
                </span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
