import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { FiLogIn, FiLogOut, FiGrid, FiUser, FiMenu } from "react-icons/fi";

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

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
      {["Home", "Courses", "About", "Contact"].map((item) => (
        <li key={item}>
          <NavLink
            to={
              item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`
            }
            className={({ isActive }) =>
              `relative px-4 py-2 transition-all duration-300 font-bold hover:text-primary ${
                isActive ? "text-primary" : "text-secondary dark:text-slate-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </>
            )}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="sticky top-0 z-[100] w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        {/* --- Navbar Left --- */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-primary"
            >
              <FiMenu size={24} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow-2xl bg-white dark:bg-slate-800 rounded-3xl w-64 space-y-2 border border-slate-100 dark:border-slate-700"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              whileHover={{ rotate: 15 }}
              className="w-10 h-10 object-contain"
              src={logo}
              alt="EduLearn Logo"
            />
            <span className="text-2xl font-black text-secondary dark:text-white tracking-tighter">
              Edu<span className="text-primary">Learn</span>
            </span>
          </Link>
        </div>

        {/* --- Navbar Center --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
        </div>

        {/* --- Navbar Right --- */}
        <div className="navbar-end gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={handleTheme}
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-secondary dark:text-yellow-400 hover:scale-110 transition-all active:scale-95"
          >
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="group relative flex items-center p-1 rounded-full border-2 border-transparent hover:border-primary transition-all"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-slate-700 bg-slate-100">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-full h-full text-slate-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {open && (
                  <motion.ul
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className="absolute right-0 mt-4 p-5 shadow-2xl bg-white dark:bg-slate-800 rounded-[2rem] w-72 border border-slate-100 dark:border-slate-700 z-[110]"
                  >
                    {/* User Info Header */}
                    <div className="flex flex-col items-center text-center pb-4 mb-4 border-b border-slate-50 dark:border-slate-700">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-2">
                        <img
                          src={user.photoURL}
                          alt="user"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-black text-secondary dark:text-white truncate w-full px-2">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-slate-400 truncate w-full px-2">
                        {user.email}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <NavLink
                        to="/dashboard"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-all"
                      >
                        <FiGrid className="text-xl" /> Dashboard
                      </NavLink>

                      <NavLink
                        to="/dashboard/profile"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-all"
                      >
                        <FiUser className="text-xl" /> View Profile
                      </NavLink>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 p-3 rounded-2xl font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all mt-2"
                      >
                        <FiLogOut className="text-xl" /> Logout Account
                      </button>
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/auth/login"
                className="px-8 py-3 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/25 flex items-center gap-2 hover:bg-indigo-700 transition-all"
              >
                <FiLogIn /> Login
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
