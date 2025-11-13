import React, { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCourses from "../Hooks/useCourses";

const CourseDetails = () => {
  const data = useLoaderData();
  const courseDetails = data.result;
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { loading, error } = useCourses();

  if (loading) return <Loader></Loader>;
  if (error) return <ErrorPage message="Course not found" />;

  const handleEnrolled = () => {
    const enrollData = {
      title: courseDetails.title,
      imageURL: courseDetails.imageURL,
      price: courseDetails.price,
      duration: courseDetails.duration,
      category: courseDetails.category,
      description: courseDetails.description,
      course_start_date: courseDetails.course_start_date,
      course_end_date: courseDetails.course_end_date,
      created_by: courseDetails.created_by,
      created_ad: courseDetails.created_ad,
    };
   
    const enrolledCourse = {
      ...enrollData,
      enrolled_by: user?.email,
      enrolled_at: new Date().toISOString(),
    };

    fetch("https://my-assignment-10-server-1.onrender.com/enrolled-courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrolledCourse),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "✅ Enrolled Successfully!",
          text: `${courseDetails.title} added to your list.`,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#6366f1",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Enrollment Failed!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://my-assignment-10-server-1.onrender.com/courses/${courseDetails._id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "✅ Your file has been deleted.",
              icon: "success",
            });
            navigate("/my-added-course");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto my-12 bg-white rounded-3xl shadow-xl overflow-hidden">
      <title>EduLearn | Course Details</title>
      {/* Image */}
      <div className="relative">
        <img
          src={courseDetails.imageURL}
          alt={courseDetails.title}
          className="w-full h-[400px] object-cover"
        />
        <span className="absolute top-5 left-5 bg-primary text-white px-4 py-1 rounded-full">
          {courseDetails.category}
        </span>
      </div>

      {/* Course Info */}
      <div className="p-8 space-y-4">
        <h1 className="text-3xl text-primary font-bold">{courseDetails.title}</h1>
        <p className="text-gray-600">{courseDetails.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="font-semibold text-primary">Email</h3>
            <p className="text-black">{courseDetails.created_by}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Duration</h3>
            <p className="text-black">{courseDetails.duration} Weeks</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <p className="text-lg text-primary font-semibold">Price: ৳{courseDetails.price}</p>
          <div className="flex flex-col gap-3">
            {user?.email !== courseDetails.created_by && (
              <button
                onClick={handleEnrolled}
                className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-indigo-600 transition-all cursor-pointer"
              >
                Enroll Now
              </button>
            )}
            {user?.email === courseDetails.created_by && (
              <Link
                to={`/update-course/${courseDetails._id}`}
                className="btn btn-primary px-8 py-3 rounded-lg hover:bg-indigo-600 transition-all"
              >
                Update Course
              </Link>
            )}
            {user?.email === courseDetails.created_by && (
              <button
                onClick={handleDelete}
                className="btn bg-red-500 border-none text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-all cursor-pointer"
              >
                Delete Course
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="btn border-primary border-2 text-primary bg-white" 
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
