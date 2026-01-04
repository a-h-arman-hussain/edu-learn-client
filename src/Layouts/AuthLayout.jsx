import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="sticky top-0 z-50 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden py-10 md:py-16">
        {/* Auth Content Card */}
        <div className="relative z-10 max-w-lg w-full px-4 sm:px-6">
          <div className="rounded-[2.5rem] shadow-2xl shadow-indigo-100 ">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
