import { useState, useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import {
  FiHome,
  FiBook,
  FiGrid,
  FiPlusCircle,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX,
  FiCheckCircle,
} from "react-icons/fi";

export default function DashboardLayout() {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-3
     ${
       isActive
         ? "bg-primary text-white translate-x-1"
         : "text-slate-500 hover:bg-indigo-50 hover:text-primary"
     }`;

  return (
    <div className="min-h-screen flex">
      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`z-50 backdrop-blur-xl border-r border-slate-100 shadow-xl md:shadow-none
        transform transition-all duration-300 ease-in-out
        ${
          open
            ? "translate-x-0 fixed inset-y-0 left-0"
            : "-translate-x-full fixed inset-y-0 left-0"
        }
        md:translate-x-0 md:sticky md:top-0
        w-72 h-screen flex flex-col`}
      >
        {/* Brand Logo Area */}
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8" />
            <span className="text-xl font-black text-secondary tracking-tight">
              Edu<span className="text-primary">Learn</span>
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-slate-400"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* User profile card */}
        <div className="mx-4 mb-6 p-4 rounded-2xl border border-secondary flex items-center gap-3">
          <div className="relative">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-11 h-11 rounded-full border-2 border-white shadow-sm"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {user?.displayName?.charAt(0) || "U"}
              </div>
            )}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="font-bold text-secondary text-sm truncate uppercase tracking-wide">
              {user?.displayName || "Student"}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">
              {user?.email}
            </span>
          </div>
        </div>

        {/* Navigation Area */}
        <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 ml-2">
            Main Menu
          </p>
          <ul className="space-y-1.5">
            <li>
              <NavLink to="/" className={navItemClass}>
                <FiHome size={18} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={navItemClass}>
                <FiBook size={18} /> All Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/home" className={navItemClass}>
                <FiGrid size={18} /> Overview
              </NavLink>
            </li>

            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-8 mb-4 ml-2">
              Management
            </p>
            <li>
              <NavLink to="/dashboard/my-added-course" className={navItemClass}>
                <FiCheckCircle size={18} /> My Added
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-enrolled-course"
                className={navItemClass}
              >
                <FiBook size={18} /> Enrolled
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-course" className={navItemClass}>
                <FiPlusCircle size={18} /> Add Course
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Bottom actions */}
        <div className="p-4 mt-auto border-t border-slate-50 space-y-1">
          <NavLink to="/dashboard/profile" className={navItemClass}>
            <FiUser size={18} /> Profile Settings
          </NavLink>
          <button
            onClick={logOut}
            className="w-full px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all flex items-center gap-3"
          >
            <FiLogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 h-16 backdrop-blur-md shadow-md flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <FiMenu size={24} />
            </button>
            <h1 className="text-lg font-bold text-secondary hidden md:block">
              Welcome back, {user?.displayName?.split(" ")[0] || "User"}!
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs font-bold text-secondary">
                Dashboard
              </span>
              <span className="text-[10px] text-primary font-medium italic">
                Student Mode
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-primary">
              <FiGrid size={20} />
            </div>
          </div>
        </header>

        {/* Main Content Scrollable Area */}
        <main className="flex-1 p-4 md:p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
