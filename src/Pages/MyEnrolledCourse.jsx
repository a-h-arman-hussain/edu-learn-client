import React from "react";
import useCourses from "../Hooks/useCourses";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";
import { FiPlayCircle, FiClock, FiCalendar } from "react-icons/fi";
import { Link } from "react-router";

const MyEnrolledCourse = () => {
  const { myEnrolledCourse, loading, error } = useCourses();

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="min-h-screen pb-20">
      <title>EduLearn | My Enrolled Courses</title>

      {/* --- Page Header --- */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-black text-secondary italic">
          My Learning <span className="text-primary">Journey</span>
        </h2>
        <p className="mt-1">
          আপনার এনরোল করা কোর্সগুলো এখান থেকে পরিচালনা করুন এবং শেখা শুরু করুন।
        </p>
      </div>

      {/* --- Course Grid --- */}
      {!myEnrolledCourse || myEnrolledCourse.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
          <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <FiPlayCircle size={40} />
          </div>
          <h3 className="text-xl font-bold text-secondary mb-2">
            You haven't started yet!
          </h3>
          <p className="text-neutral mb-8 max-w-sm mx-auto px-4">
            আপনি এখনও কোনো কোর্সে এনরোল করেননি। আমাদের কোর্সের তালিকা থেকে আপনার
            পছন্দেরটি বেছে নিন।
          </p>
          <Link
            to="/courses"
            className="bg-primary text-white px-8 py-3.5 rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all inline-block"
          >
            Explore Courses
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myEnrolledCourse.map((course) => (
            <div
              key={course._id}
              className="group rounded-xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Course Image & Badge */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.imageURL}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <FiPlayCircle className="text-white text-5xl animate-pulse" />
                </div>
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-sm">
                  {course.category}
                </span>
              </div>

              {/* Course Details */}
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary line-clamp-2  group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <div className="">
                  <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                    <FiClock className="text-primary" />
                    <span>Duration: {course.duration} Weeks</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                    <FiCalendar className="text-primary" />
                    <span>
                      Enrolled:{" "}
                      {course.enrolled_at
                        ? new Date(course.enrolled_at).toLocaleDateString(
                            "en-GB",
                            { day: "numeric", month: "short", year: "numeric" }
                          )
                        : "Recent"}
                    </span>
                  </div>
                </div>

                {/* Progress Bar (Static for now, looks good for UI) */}
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">
                      Course Progress
                    </span>
                    <span className="text-xs font-bold text-primary">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[5%] h-full bg-primary rounded-full group-hover:w-[15%] transition-all duration-1000"></div>
                  </div>
                </div>

                <button className="mt-3 w-full py-4 bg-slate-50 text-secondary font-bold rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  Continue Learning <FiPlayCircle size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEnrolledCourse;
