import { useState } from "react";
import useCourses from "../Hooks/useCourses";
import CourseCard from "../Components/CourseCard";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";

const Courses = () => {
  const { courses, loading, error } = useCourses();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false); // ✅ custom dropdown control

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  // ✅ Filtered courses
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter(
          (course) =>
            course.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  // ✅ Unique categories dynamically
  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <title>EduLearn | All Courses</title>

      <h2 className="text-2xl md:text-4xl sm:text-5xl font-extrabold text-center mb-12">
        Our <span className="text-primary">Courses</span>
      </h2>

      {/* ✅ Filter Header */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h1 className="text-lg font-medium">
          <span className="font-semibold text-primary">{selectedCategory}</span>{" "}
          Courses{" "}
          <span className="text-sm text-gray-500">
            ({filteredCourses.length} Found)
          </span>
        </h1>

        {/* ✅ Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="btn bg-primary text-white hover:bg-indigo-600 px-5 py-2 rounded-lg transition flex items-center gap-2"
          >
            {selectedCategory === "All" ? "Sort By Category" : selectedCategory}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {open && (
            <ul className="absolute right-0 mt-2 text-black bg-white border border-gray-200 rounded-xl shadow-lg z-[9999] w-56 p-2 animate-fadeIn">
              {categories.map((cat, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat);
                      setOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ✅ Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p>No courses available for this category.</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
