import React from "react";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <title>EduLearn | About Us</title>

        {/* --- Hero Section --- */}
        <div className="text-center mb-20">
          <h1 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
            Who We Are
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 leading-tight">
            Empowering Minds <br />
            <span className="text-primary">Through Innovation.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            আমরা বিশ্বাস করি শিক্ষা শুধু তথ্যের আদান-প্রদান নয়, বরং এটি একটি
            জীবনের পরিবর্তনকারী অভিজ্ঞতা। EduLearn-এ আমরা বিশ্বমানের রিসোর্স
            দিয়ে আপনার ক্যারিয়ার গড়ার যাত্রায় সঙ্গী হতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* --- Content Section with Image --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            {/* Decorative background for image */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/5 rounded-[2.5rem] -z-10"></div>
            <img
              src="https://media.istockphoto.com/id/1286378180/vector/website-information-concept.jpg?s=612x612&w=0&k=20&c=6v9Hcbp0zp5itIPIywobPQF13YsHIQ4j_srF5VbQusY="
              alt="About Us Illustration"
              className="w-full rounded-[2.5rem] shadow-2xl border-8 border-white"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-secondary">
              Our Journey to <span className="text-primary">Excellence</span>
            </h3>
            <p className="text-lg">
              EduLearn-এর যাত্রা শুরু হয়েছিল একটি সাধারণ স্বপ্ন নিয়ে—সবাইকে
              উচ্চমানের দক্ষতা অর্জনের সুযোগ করে দেওয়া। আজ আমরা হাজার হাজার
              শিক্ষার্থীকে তাদের পছন্দের সেক্টরে সফল হতে সাহায্য করছি।
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Industry Leading Instructors",
                "Project-Based Practical Learning",
                "Verified Certifications",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-semibold text-secondary"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Mission/Vision/Values Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              desc: "বিশ্বজুড়ে শিক্ষার্থীদের জন্য সাশ্রয়ী এবং মানসম্মত শিক্ষা নিশ্চিত করা আমাদের মূল লক্ষ্য।",
              icon: <FiTarget size={32} />,
              bg: "bg-indigo-50 text-primary",
            },
            {
              title: "Our Vision",
              desc: "একটি গ্লোবাল লার্নিং ইকোসিস্টেম তৈরি করা যেখানে দক্ষতা অর্জনে কোনো ভৌগোলিক বাধা থাকবে না।",
              icon: <FiEye size={32} />,
              bg: "bg-blue-50 text-blue-600",
            },
            {
              title: "Our Values",
              desc: "সততা, উদ্ভাবন এবং ধারাবাহিক শেখার মানসিকতা আমাদের প্রতিটি কাজের মূলে রয়েছে।",
              icon: <FiHeart size={32} />,
              bg: "bg-emerald-50 text-emerald-600",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-10 border border-secondary hover:border-primary rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div
                className={`w-16 h-16 ${card.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                {card.icon}
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                {card.title}
              </h2>
              <p className="leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
