import { useState } from "react";
import useCourses from "../Hooks/useCourses";
import CourseCard from "../Components/CourseCard";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";

const Courses = () => {
  const { courses, loading, error } = useCourses();
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  // ✅ Unique category list dynamically
  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <title>EduLearn | All Courses</title>

      <h2 className="text-2xl md:text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
        Our <span className="text-primary">Courses</span>
      </h2>

      {/* ✅ Dropdown + Dynamic Count */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lg font-medium text-gray-700">
          Total Courses{" "}
          <span className=" text-sm">
            <span className=" font-bold text-primary">
              ({filteredCourses.length})
            </span>
            Found
          </span>
        </h1>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-primary text-white hover:bg-indigo-600"
          >
            {selectedCategory === "All" ? "Sort By Category" : selectedCategory}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white border border-gray-200 rounded-xl z-[1] w-56 p-2 shadow-lg"
          >
            {categories.map((cat, i) => (
              <li key={i}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  } rounded-lg text-left px-3 py-2 transition`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
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
