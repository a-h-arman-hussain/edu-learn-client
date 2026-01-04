import React from "react";
import { FiPlayCircle } from "react-icons/fi";

export default function DemoVideo() {
  const videos = [
    "https://www.youtube.com/embed/Sklc_fQBmcs?si=p16Hhxn7Wy69Rwew",
    "https://www.youtube.com/embed/5O5e0nnVulY?si=sUMIVjNeF4D9Jycn",
    "https://www.youtube.com/embed/H5zSQ9M_s2Y?si=6pAtFK6giv-3iHoV",
  ];

  return (
    <section className="mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-3">
            <FiPlayCircle />
            <span>Watch & Learn</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4">
            Take a Quick Tour
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            আমাদের প্ল্যাটফর্মটি কীভাবে কাজ করে এবং আপনি কীভাবে আপনার শেখার
            যাত্রা শুরু করতে পারেন তার একটি সংক্ষিপ্ত ওভারভিউ দেখে নিন।
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((src, idx) => (
            <div key={idx} className="group relative">
              {/* Decorative background block */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Video Container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <iframe
                  className="w-full h-full"
                  src={src}
                  title={`YouTube video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Optional Caption */}
              <div className="mt-6 text-center">
                <h4 className="font-bold text-secondary group-hover:text-primary transition-colors">
                  Lesson Overview {idx + 1}
                </h4>
                <p className="text-xs mt-1">
                  Get insights into our curriculum
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
