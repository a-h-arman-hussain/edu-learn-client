import React from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "framer-motion";
import { FiArrowRight, FiUsers } from "react-icons/fi";

const Banner = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-4 md:py-8 lg:py-10 rounded-3xl border border-slate-50 dark:border-slate-900 shadow-sm">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-primary/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full">
        {/* --- Left Content --- */}
        <div className="text-center lg:text-left space-y-3 md:space-y-4 flex-1 w-full order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full"
          >
            🚀 EduLearn Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-secondary dark:text-white leading-tight tracking-tight"
          >
            Unlock Your <span className="text-primary">Potential</span>{" "}
            <br className="hidden lg:block" />
            With Top Mentors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400 text-xs md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed line-clamp-2 md:line-clamp-none"
          >
            বিশ্বমানের মেন্টরদের সহায়তায় আপনার শেখার যাত্রা হোক আরও সহজ। আজই
            শুরু করুন আপনার পছন্দের কোর্স।
          </motion.p>

          <div className="pt-2">
            <Link
              to="/courses"
              className="group bg-primary text-white px-5 py-2.5 rounded-xl font-bold shadow-md hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 text-xs md:text-sm"
            >
              Explore Courses{" "}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* --- Right Content (Smaller Image) --- */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end order-1 lg:order-2">
          {/* ইমেজ এবং ফ্রেমের সাইজ কমানো হয়েছে উচ্চতা বাঁচাতে */}
          <div className="relative w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[340px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-20 rounded-2xl overflow-hidden border-4 md:border-[6px] border-white dark:border-slate-900 shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
                alt="Students"
                className="w-full h-[150px] sm:h-[200px] lg:h-[260px] object-cover"
              />
            </motion.div>

            {/* Floating Card - আরও ছোট করা হয়েছে */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-2 md:-left-4 top-4 z-30 bg-white dark:bg-slate-800 p-1.5 rounded-lg shadow-lg flex items-center gap-1.5 border border-slate-50 dark:border-slate-700"
            >
              <div className="bg-orange-100 p-1 rounded-md text-orange-600">
                <FiUsers size={12} />
              </div>
              <div className="pr-1">
                <p className="text-[10px] md:text-xs font-black text-secondary dark:text-white leading-none">
                  12K+
                </p>
                <p className="text-[6px] font-bold text-slate-400 uppercase tracking-tighter">
                  Students
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
