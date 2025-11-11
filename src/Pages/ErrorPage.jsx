import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 px-4">
      <title>EduLearn | Error</title>
      {/* Animated 404 */}
      <h1 className="text-9xl font-extrabold text-purple-300 animate-bounce mb-6 mt-6">
        404
      </h1>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 text-center">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-8 text-center max-w-md text-lg">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Go Back Button */}
      <Link
        to="/"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        ← Go Back Home
      </Link>

      {/* Floating illustration */}
      <div className="mt-12 relative w-48 h-48">
        <div className="absolute bottom-0 w-12 h-12 bg-purple-400 rounded-full animate-bounce-slow left-0"></div>
        <div className="absolute bottom-0 w-16 h-16 bg-pink-400 rounded-full animate-bounce-slow left-16"></div>
        <div className="absolute bottom-0 w-10 h-10 bg-yellow-400 rounded-full animate-bounce-slow left-32"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
