import React from "react";
import Banner from "../Components/Banner";
import WhyChooseUs from "../Components/WhyChooseUs";
import TopInstructors from "../Components/TopInstructors";
import useCourses from "../Hooks/useCourses";
import CourseCard from "../Components/CourseCard";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";
import Stats from "../Components/Stats";
import CTA from "../Components/CTA";
import FAQs from "../Components/FAQs";
import Awards from "../Components/Awards";
import DemoVideo from "../Components/DemoVideo";
import LearningPartnersMarquee from "../Components/Partners";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const Home = () => {
  const { latestCourse, loading, error } = useCourses();

  return (
    <div className="">
      <title>EduLearn | Home</title>

      {/* Hero Section */}
      <Banner />

      {/* Partners Marquee */}
      <LearningPartnersMarquee />

      {/* Popular Courses Section */}
      <section className="mt-15 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-2">
              Top Rated Courses
            </h2>
            <h1 className="text-4xl md:text-5xl font-black text-secondary leading-tight">
              Expand Your Knowledge with{" "}
              <span className="text-primary">Popular Courses</span>
            </h1>
          </div>
          <Link
            to="/courses"
            className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 bg-indigo-50 px-6 py-3 rounded-2xl"
          >
            Explore All Courses <FiArrowRight />
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader />
          </div>
        )}

        {/* Error State */}
        {error && <ErrorPage />}

        {/* Courses Grid */}
        {!loading && !error && latestCourse.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestCourse.slice(0, 8).map((course) => (
              <div key={course._id} className="group">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && latestCourse.length === 0 && (
          <div className="text-center py-24 rounded-[3rem] border-2 border-dashed border-slate-200">
            <p className="text-xl text-neutral font-medium italic">
              No courses available at the moment.
            </p>
          </div>
        )}
      </section>

      {/* Other Sections for Better Flow */}
      <WhyChooseUs />

      <Stats />

      <TopInstructors />

      <CTA />

      <DemoVideo />

      <FAQs />
      <Awards />
    </div>
  );
};

export default Home;
