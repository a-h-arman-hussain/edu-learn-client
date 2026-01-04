import React from "react";
import { Link, useNavigate } from "react-router";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <title>EduLearn | 404 Not Found</title>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Animated Error Code */}
        <div className="relative inline-block">
          <h1 className="text-[12rem] md:text-[16rem] font-black text-slate-50 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white border-[12px] border-primary rounded-full shadow-2xl shadow-indigo-200 animate-pulse flex items-center justify-center">
              <span className="text-primary text-6xl md:text-8xl font-black">
                ?
              </span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-8 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-secondary">
            Oops! Page <span className="text-primary">Lost in Space</span>
          </h2>
          <p className="text-neutral text-lg max-w-md mx-auto leading-relaxed">
            দুঃখিত, আপনি যে পাতাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি। সম্ভবত এটি
            সরিয়ে ফেলা হয়েছে অথবা লিংকটি ভুল।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 text-secondary px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all duration-300"
          >
            <FiArrowLeft size={20} /> Go Back
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
          >
            <FiHome size={20} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
