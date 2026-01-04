import React, { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";
import useCourses from "../Hooks/useCourses";
import {
  FiClock,
  FiCalendar,
  FiUser,
  FiTag,
  FiArrowLeft,
  FiEdit3,
  FiTrash2,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";

const CourseDetails = () => {
  const data = useLoaderData();
  const course = data.result;
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { loading, error } = useCourses();

  if (loading) return <Loader />;
  if (error || !course) return <ErrorPage message="Course not found" />;

  const isOwner = user?.email === course.created_by;

  /* ---------------- Enroll ---------------- */
  const handleEnrolled = () => {
    const enrolledCourse = {
      ...course,
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
          icon: "success",
          title: "Successfully Enrolled!",
          text: "You can now access this course from your dashboard.",
          confirmButtonColor: "#4338ca",
        });
      })
      .catch(() => Swal.fire("❌ Error", "Try again later", "error"));
  };

  /* ---------------- Delete ---------------- */
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://my-assignment-10-server-1.onrender.com/courses/${course._id}`,
          {
            method: "DELETE",
          }
        ).then(() => {
          Swal.fire("Deleted!", "Course has been removed.", "success");
          navigate("/dashboard/my-added-course");
        });
      }
    });
  };

  return (
    <div className="min-h-screen py-10">
      <title>EduLearn | {course.title}</title>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Navigation & Actions Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors"
          >
            <FiArrowLeft /> Back to Courses
          </button>

          {isOwner && (
            <div className="flex gap-3">
              <Link
                to={`/dashboard/update-course/${course._id}`}
                className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-secondary font-bold hover:bg-slate-50 transition-all shadow-sm"
              >
                <FiEdit3 /> Edit
              </Link>
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl font-bold hover:bg-red-100 transition-all shadow-sm"
              >
                <FiTrash2 /> Delete
              </button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ================= LEFT: MAIN CONTENT ================= */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Wrap */}
            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-secondary">
              <img
                src={course.imageURL}
                alt={course.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  {course.category}
                </span>
              </div>
            </div>

            {/* Overview */}
            <div className="p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-secondary">
              <h1 className="text-3xl md:text-4xl font-black text-secondary mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg leading-relaxed whitespace-pre-line">
                {course.description}
              </p>

              <div className="mt-10 pt-8 border-t border-secondary grid grid-cols-2 md:grid-cols-3 gap-6">
                <Info
                  icon={<FiUser />}
                  label="Instructor"
                  value={course.created_by?.split("@")[0]}
                />
                <Info
                  icon={<FiClock />}
                  label="Duration"
                  value={`${course.duration} Weeks`}
                />
                <Info
                  icon={<FiCalendar />}
                  label="Created"
                  value={new Date(course.created_ad).toLocaleDateString()}
                />
              </div>
            </div>

            {/* Placeholder: Curriculum or Reviews */}
            <div className="bg-secondary p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <FiStar className="text-amber-400" /> Reviews & Feedback
              </h3>
              <div className="py-10 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <p className="text-slate-400 font-medium italic">
                  No reviews yet. Be the first to share your experience!
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: STICKY CARD ================= */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">
                  Course Price
                </span>
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg text-xs font-bold">
                  Best Value
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-secondary">
                  ৳{course.price}
                </span>
                <span className="text-slate-400 line-through text-lg">
                  ৳{parseInt(course.price) + 2000}
                </span>
              </div>

              <ul className="space-y-4 py-4">
                {[
                  "Full Lifetime Access",
                  "Certificate of Completion",
                  "Access on Mobile & Desktop",
                  "Course Materials Included",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-slate-600"
                  >
                    <FiCheckCircle className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              {!isOwner ? (
                <button
                  onClick={handleEnrolled}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
                >
                  Enroll Now
                </button>
              ) : (
                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-center">
                  <p className="text-primary font-bold text-sm">
                    You are the instructor of this course.
                  </p>
                </div>
              )}

              <p className="text-center text-xs text-slate-400 font-medium">
                30-Day Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Reusable Info Component ---------- */
const Info = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary shrink-0 border border-slate-100">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
        {label}
      </p>
      <p className="text-sm font-bold text-secondary truncate w-24 md:w-full">
        {value}
      </p>
    </div>
  </div>
);

export default CourseDetails;
