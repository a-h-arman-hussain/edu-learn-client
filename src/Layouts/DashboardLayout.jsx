import { useState, useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";

export default function DashboardLayout() {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `w-full mb-2 px-3 py-2 rounded-lg text-sm font-medium transition 
   border hover:bg-primary hover:text-white hover:border-transparent 
   flex items-center justify-start
   ${isActive ? "bg-primary text-white font-semibold border-none" : ""}`;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={navItemClass}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/courses" className={navItemClass}>
          All Courses
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/my-added-course" className={navItemClass}>
          My Added Course
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/my-enrolled-course" className={navItemClass}>
          My Enrolled
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/add-course" className={navItemClass}>
          Add Course
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="min-h-screen flex">
      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div className="relative">
        <aside
          className={`border-r border-slate-200 p-6 z-50
        transform transition-transform duration-300 shadow-md backdrop-blur-xl
        ${
          open
            ? "translate-x-0 fixed inset-y-0 left-0"
            : "-translate-x-full fixed inset-y-0 left-0"
        }
        md:translate-x-0 md:relative md:sticky md:top-0 md:h-screen md:flex md:flex-col`}
        >
          {/* Mobile user/profile */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <div className="flex flex-col items-center gap-3">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full flex items-center justify-center  font-bold">
                  {user?.displayName?.charAt(0) || "U"}
                </div>
              )}
              <span className="font-semibold">
                {user?.displayName || "User"}
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold text-red-600 transition"
            >
              ✕
            </button>
          </div>

          {/* Desktop user/profile */}
          <div className="hidden md:flex flex-col items-center mb-10">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-20 h-20 rounded-full mb-2"
              />
            ) : (
              <div className="w-20 h-20 rounded-full flex items-center justify-center font-bold mb-2">
                {user?.displayName?.charAt(0) || "U"}
              </div>
            )}
            <span className="font-semibold text-lg">
              {user?.displayName || "User"}
            </span>
          </div>

          {/* Navigation links */}
          <ul className="flex-1">{navLinks}</ul>

          {/* Bottom actions */}
          <ul className="mt-6">
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) => `
                        w-full mb-2 px-3 py-2 rounded-lg text-sm font-medium transition 
                         border
                             flex items-center justify-start
                             hover:bg-primary hover:text-white hover:border-transparent
                             ${
                               isActive
                                 ? "bg-primary text-white font-semibold border-none"
                                 : ""
                             }
            `}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <button
                onClick={logOut}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition cursor-pointer"
              >
                Logout
              </button>
            </li>
          </ul>
        </aside>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Sticky header */}
        <div className="sticky top-0 z-30 shadow-md backdrop-blur-xl flex items-center h-16 px-4 md:px-6 flex-shrink-0">
          <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
            ☰
          </button>
          <Link
            to="/"
            className="flex items-center text-2xl font-extrabold text-primary tracking-wide ml-4"
          >
            <img className="w-10" src={logo} alt="Logo" />
            <span className="hidden sm:block ml-2">EduLearn</span>
          </Link>
        </div>

        {/* Scrollable content */}
        <main className="p-4 md:p-6 overflow-auto flex-1 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
