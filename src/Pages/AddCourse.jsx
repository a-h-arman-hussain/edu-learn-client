import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { FiBookOpen, FiImage, FiDollarSign, FiClock, FiTag, FiAlignLeft } from "react-icons/fi";

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
          title: "Course Added!",
          text: `${formData.title} has been successfully published.`,
          confirmButtonColor: "#4338ca",
          timer: 2500,
        });
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const labelStyle = "flex items-center gap-2 text-sm font-bold text-secondary mb-2 uppercase tracking-wide";
  const inputStyle = "w-full border border-secondary text-secondary px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder:text-slate-400";

  return (
    <div className="max-w-4xl mx-auto">
      <title>EduLearn | Add Course</title>
      
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-black text-secondary">
          Create New <span className="text-primary">Course</span>
        </h2>
        <p className="mt-2">নতুন একটি কোর্স পাবলিশ করতে নিচের ফর্মটি নির্ভুলভাবে পূরণ করুন।</p>
      </div>

      <div className="p-6 md:p-10 rounded-[2.5rem] border border-secondary shadow-xl shadow-indigo-500/5">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div className="group">
            <label className={labelStyle}>
              <FiBookOpen className="text-primary" /> Course Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="e.g. Master Modern Web Development"
              className={inputStyle}
            />
          </div>

          {/* Image URL */}
          <div className="group">
            <label className={labelStyle}>
              <FiImage className="text-primary" /> Cover Image URL
            </label>
            <input
              type="url"
              name="imageURL"
              required
              placeholder="https://images.unsplash.com/your-course-thumbnail"
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label className={labelStyle}>
                <FiDollarSign className="text-primary" /> Price (৳)
              </label>
              <input
                type="number"
                name="price"
                required
                placeholder="2500"
                className={inputStyle}
              />
            </div>
            {/* Duration */}
            <div>
              <label className={labelStyle}>
                <FiClock className="text-primary" /> Duration (Weeks)
              </label>
              <input
                type="number"
                name="duration"
                required
                placeholder="12"
                className={inputStyle}
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className={labelStyle}>
              <FiTag className="text-primary" /> Category
            </label>
            <input
              list="categoryOptions"
              name="category"
              placeholder="Search or select category"
              required
              className={inputStyle}
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
            <label className={labelStyle}>
              <FiAlignLeft className="text-primary" /> Course Description
            </label>
            <textarea
              name="description"
              required
              placeholder="Write a detailed description about what students will learn..."
              className={`${inputStyle} min-h-[150px] resize-none`}
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-md hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Publish Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;