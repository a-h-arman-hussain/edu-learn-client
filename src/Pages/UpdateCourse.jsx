import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import {
  FiEdit,
  FiFileText,
  FiTag,
  FiClock,
  FiDollarSign,
  FiImage,
} from "react-icons/fi";

const UpdateCourse = () => {
  const data = useLoaderData();
  const updateDetails = data.result;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCourse = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      duration: e.target.duration.value,
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
          text: "আপনার কোর্সের তথ্য সফলভাবে আপডেট করা হয়েছে।",
          timer: 2000,
          showConfirmButton: false,
          customClass: { popup: "rounded-[2rem]" },
        });
        navigate("/dashboard/my-added-course");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Update Failed!",
          text: "দুঃখিত, কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <title>EduLearn | Update Course</title>

      {/* --- Page Header --- */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-black text-secondary italic">
          Edit <span className="text-primary">Course</span>
        </h2>
        <p className="mt-1 font-medium">
          কোর্সের কন্টেন্ট বা তথ্য আপডেট করার জন্য নিচের ফর্মটি ব্যবহার করুন।
        </p>
      </div>

      <div className="rounded-[2.5rem] shadow-xl shadow-indigo-100/50 border border-secondary p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title Section */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
              <FiFileText className="text-primary" /> Course Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={updateDetails.title}
              placeholder="e.g. Advanced Web Development"
              className="w-full px-6 py-4 border border-secondary text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-bold text-lg"
              required
            />
          </div>

          {/* Description Section */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
              <FiEdit className="text-primary" /> Course Description
            </label>
            <textarea
              name="description"
              defaultValue={updateDetails.description}
              rows={6}
              placeholder="কোর্স সম্পর্কে বিস্তারিত লিখুন..."
              className="w-full px-6 py-4 border border-secondary text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium leading-relaxed"
              required
            ></textarea>
          </div>

          {/* Grid for Price, Duration, Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                <FiDollarSign className="text-primary" /> Price (৳)
              </label>
              <input
                type="number"
                name="price"
                defaultValue={updateDetails.price}
                className="w-full px-6 py-4 border border-secondary text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-bold"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                <FiClock className="text-primary" /> Duration (Weeks)
              </label>
              <input
                type="number"
                name="duration"
                defaultValue={updateDetails.duration}
                className="w-full px-6 py-4 border border-secondary text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-bold"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                <FiTag className="text-primary" /> Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={updateDetails.category}
                placeholder="e.g. Programming"
                className="w-full px-6 py-4 border border-secondary text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-bold"
              />
            </div>
          </div>

          {/* Image URL Section */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
              <FiImage className="text-primary" /> Cover Image URL
            </label>
            <input
              type="text"
              name="imageURL"
              defaultValue={updateDetails.imageURL}
              placeholder="https://example.com/image.jpg"
              className="w-full px-6 py-4 border border-secondary text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 py-4 bg-secondary text-white font-black rounded-2xl hover:bg-slate-500 transition-all order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-[2] py-4 bg-primary text-white font-black rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all order-1 sm:order-2"
            >
              Save Changes & Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
