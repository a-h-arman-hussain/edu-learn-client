import React from "react";
import useCourses from "../Hooks/useCourses";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";

const MyEnrolledCourse = () => {
  const { myEnrolledCourse, loading, error } = useCourses();
  console.log(myEnrolledCourse, loading, error);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  if (!myEnrolledCourse || myEnrolledCourse.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 text-lg">
        You have not enrolled in any courses yet.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <title>EduLearn | My Enrolled Curse</title>
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        My Enrolled <span className="text-primary">Course</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {myEnrolledCourse.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Course Image */}
            <div className="relative">
              <img
                src={course.imageURL}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {course.category}
              </span>
            </div>

            {/* Course Info */}
            <div className="p-6 flex flex-col gap-2">
              <h2 className="text-lg font-bold text-gray-800 truncate">
                {course.title}
              </h2>
              <div className="flex justify-between items-center mt-2 text-gray-700">
                <span className="text-sm">Duration: {course.duration}Weeks</span>
                <span className="text-sm font-semibold">৳{course.price}</span>
              </div>

              <div className="text-xs text-gray-400 mt-1">
                Enrolled on:{" "}
                {course.enrolled_at
                  ? new Date(course.enrolled_at).toLocaleDateString()
                  : "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledCourse;
