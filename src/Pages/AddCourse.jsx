import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddCourse = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      imageURL: e.target.imageURL.value,
      price: e.target.price.value,
      duration: e.target.duration.value,
      category: e.target.category.value,
      description: e.target.description.value,
      created_by: user?.email,
      created_ad: new Date(),
    };

    fetch("https://my-assignment-10-server-1.onrender.com/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `✅ ${formData.title}`,
          text: "Your course has been successfully added.",
          timer: 2000,
          showConfirmButton: false,
        });
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Failed to add course",
          text: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-lg">
      <title>EduLearn | Add Course</title>
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-6">
        Add a New <span className="text-primary">Course</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-primary font-semibold mb-1">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="Full-Stack Web Development Bootcamp"
            className="w-full bg-none border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-primary font-semibold mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="imageURL"
            required
            placeholder="https://example.com/course-image.jpg"
            className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Price */}
          <div>
            <label className="block text-primary font-semibold mb-1">
              Price (৳)
            </label>
            <input
              type="number"
              name="price"
              required
              placeholder="Your Course Price"
              className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          {/* Duration */}
          <div>
            <label className="block text-primary font-semibold mb-1">
              Duration <span className="text-sm">(weeks)</span>
            </label>
            <input
              type="number"
              name="duration"
              required
              placeholder="Your Course Duration"
              className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>
        {/* Category */}
        <div>
          <label className="block text-primary font-semibold mb-1">
            Category
          </label>
          <input
            list="categoryOptions"
            name="category"
            placeholder="Select or add category"
            required
            className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <datalist id="categoryOptions">
            <option value="Web Development" />
            <option value="Graphic Design" />
            <option value="Data Science" />
            <option value="Digital Marketing" />
            <option value="UI/UX Design" />
          </datalist>
        </div>
        {/* Description */}
        <div>
          <label className="block text-primary font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            required
            placeholder="Briefly describe the course..."
            className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="10"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn w-full btn-primary px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
