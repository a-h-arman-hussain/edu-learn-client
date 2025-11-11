import useCourses from "../Hooks/useCourses";
import CourseCard from "../Components/CourseCard";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";

const Courses = () => {
  const { courses, loading, error } = useCourses();

  if (loading) return <Loader></Loader>;

  if (error) return <ErrorPage></ErrorPage>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <title>EduLearn | All Course</title>

      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
        Our <span className="text-primary">Courses</span>
      </h2>


      {!loading && !error && courses.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      )}

      {/* No Courses */}
      {!loading && !error && courses.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No courses available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
