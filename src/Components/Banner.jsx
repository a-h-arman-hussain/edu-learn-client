import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "framer-motion";

const Banner = () => {
  const { user } = use(AuthContext);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6 max-w-lg">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 leading-tight">
            Learn <span className="text-primary">Smarter</span>,<br />
            Achieve <span className="text-secondary">Faster</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Unlock your potential with high-quality online courses. Join
            thousands of learners worldwide.
          </p>
          {user && (
            <motion.h1
              className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {user.displayName}
            </motion.h1>
          )}
          {!user && (
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 w-full sm:w-auto">
              <motion.div
                className="rounded-xl p-[2px] overflow-hidden w-40 sm:w-44"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                style={{
                  background:
                    "linear-gradient(90deg, #6366F1, #EC4899, #F59E0B, #10B981)",
                  backgroundSize: "300% 300%",
                }}
              >
                <Link
                  to="/courses"
                  className="block text-center text-white py-2 rounded-lg font-semibold hover:text-black transition-colors duration-300 w-full"
                >
                  Explore Courses
                </Link>
              </motion.div>
              <motion.div
                className="relative inline-block p-[2px] rounded-xl overflow-hidden w-40 sm:w-44"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                style={{
                  background:
                    "linear-gradient(90deg, #6366F1, #EC4899, #F59E0B, #10B981)",
                  backgroundSize: "300% 300%",
                }}
              >
                <div className="rounded-xl bg-white w-full hover:bg-gray-200 h-full flex items-center justify-center">
                  <motion.span
                    className="block text-lg font-semibold text-center"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    style={{
                      background:
                        "linear-gradient(90deg, #6366F1, #EC4899, #F59E0B, #10B981)",
                      backgroundSize: "300% 300%",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    <Link
                      to="/auth/register"
                      className="block w-full py-2 rounded-lg"
                    >
                      Join Now
                    </Link>
                  </motion.span>
                </div>
              </motion.div>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/easy-online-learning-illustration-svg-download-png-1648374.png"
            alt="Learning Illustration"
            className="w-full max-w-md drop-shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
