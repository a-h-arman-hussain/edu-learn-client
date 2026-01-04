import React from "react";

export default function LearningPartnersMarquee() {
  const logos = [
    {
      name: "Coursera",
      logo: "https://images.ctfassets.net/00atxywtfxvd/2QeS5ysKMhZ3ZjiU2rGRJA/e15df94b265053ce8ded4f5e630241c8/cropped-android-chrome-512x512-1.png",
    },
    {
      name: "Udemy",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyRNaSvwqmBxFJjS9--mgdBBZeocmsUHj-A&s",
    },
    {
      name: "edX",
      logo: "https://images.seeklogo.com/logo-png/33/1/edx-logo-png_seeklogo-339838.png",
    },
    {
      name: "Khan Academy",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFy-8FWrsWUpLEizRv71SpItpOnsMN8rjxQ&s",
    },
    {
      name: "Skillshare",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmH4q1XoXQj2BHPCJ63rgKEGxKvL_ENfM8w&s",
    },
    {
      name: "LinkedIn Learning",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/LinkedIn_Learning_logo.png",
    },
    {
      name: "Pluralsight",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pluralsight_Logo.svg/2560px-Pluralsight_Logo.svg.png",
    },
    {
      name: "Codecademy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Codecademy.svg/2560px-Codecademy.svg.png",
    },
    {
      name: "FutureLearn",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/The_logo_of_FutureLearn.svg/2560px-The_logo_of_FutureLearn.svg.png",
    },
    {
      name: "Treehouse",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EHqBIPDe29uZ6iC2Mg_dcZ8ECaTNzVvj2Q&s",
    },
    {
      name: "MasterClass",
      logo: "https://1000logos.net/wp-content/uploads/2024/10/Masterclass-Logo.jpg",
    },
    {
      name: "DataCamp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZvdfTgAG643jCAF4BNMi60vTt_1AnKtZog&s",
    },
  ];

  return (
    <section className="mt-15 overflow-hidden">
      {" "}
      {/* overflow-hidden */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-secondary dark:text-slate-300 text-sm font-black uppercase tracking-[0.3em] mb-4 opacity-80">
          Trusted by Industry Leaders
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden user-select-none gap-10 group">
        

        <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-16 group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((p, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[120px] md:min-w-[160px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-8 md:max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
