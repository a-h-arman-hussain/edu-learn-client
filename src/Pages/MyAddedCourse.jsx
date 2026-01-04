import React from "react";
import useCourses from "../Hooks/useCourses";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";
import CourseCard from "../Components/CourseCard";
import { FiPlus, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router";

const MyAddedCourse = () => {
  const { myCourse, loading, error } = useCourses();

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="min-h-screen pb-20">
      <title>EduLearn | My Added Courses</title>

      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-black text-secondary italic">
            My Added <span className="text-primary">Courses</span>
          </h2>
          <p className="mt-1">আপনার তৈরি করা সকল কোর্সের তালিকা এখানে দেখুন।</p>
        </div>

        <Link
          to="/dashboard/add-course"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-2xl font-bold shadow-md hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
        >
          <FiPlus size={20} /> Add New Course
        </Link>
      </div>

      {/* --- Stats Summary --- */}
      <div className="bg-secondary p-6 rounded-[2rem] mb-12 flex items-center gap-6">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
          <FiBookOpen size={24} />
        </div>
        <div>
          <p className="text-primary text-sm font-bold uppercase tracking-wider">
            Total Published
          </p>
          <h3 className="text-2xl font-black text-white">
            {myCourse.length} Courses
          </h3>
        </div>
      </div>

      {/* --- Courses Grid --- */}
      {myCourse.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <FiBookOpen size={40} />
          </div>
          <h3 className="text-xl font-bold text-secondary mb-2">
            No Courses Added Yet
          </h3>
          <p className="text-neutral mb-8 max-w-sm mx-auto">
            আপনি এখনও কোনো কোর্স যুক্ত করেননি। নতুন শিক্ষার্থীদের জন্য আজই আপনার
            প্রথম কোর্সটি তৈরি করুন।
          </p>
          <Link
            to="/dashboard/add-course"
            className="text-primary font-bold hover:underline underline-offset-4"
          >
            Start Creating Now
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myCourse.map((course) => (
            <div key={course._id} className=" ">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedCourse;
