import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto w-full">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-2 pb-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-base-300 bg-base-200 mt-10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
