import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateCourse = () => {
  const data = useLoaderData();
  const updateDetails = data.result;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({
        title: "Login Required!",
        text: "Please log in to update this course.",
        icon: "warning",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    const updatedCourse = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      duration: e.target.duration.value,
      course_start_date: e.target.course_start_date.value,
      course_end_date: e.target.course_end_date.value,
      category: e.target.category.value,
      imageURL: e.target.imageURL.value,
    };

    fetch(
      `https://my-assignment-10-server-1.onrender.com/courses/${updateDetails._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCourse),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "✅ Updated Successfully!",
          text: `${updatedCourse.title} has been updated.`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/my-added-course");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Update Failed!",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-lg">
      <title>EduLearn | Update Course</title>
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        Update <span className="text-primary">Course</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={updateDetails.title}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={updateDetails.description}
            rows={4}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Price (৳)</label>
            <input
              type="number"
              name="price"
              defaultValue={updateDetails.price}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Duration (days)</label>
            <input
              type="number"
              name="duration"
              defaultValue={updateDetails.duration}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Start Date</label>
            <input
              type="date"
              name="course_start_date"
              defaultValue={updateDetails.course_start_date}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">End Date</label>
            <input
              type="date"
              name="course_end_date"
              defaultValue={updateDetails.course_end_date}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={updateDetails.category}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="text"
            name="imageURL"
            defaultValue={updateDetails.imageURL}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 rounded-xlz font-semibold hover:bg-indigo-600 transition-colors cursor-pointer rounded-xl"
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
