import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiClock, FiCalendar } from "react-icons/fi";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl shadow-sm hover:shadow-xl overflow-hidden
                 flex flex-col border border-slate-100 group transition-all"
      style={{ width: "290px", height: "350px" }}
    >
      {/* Image Section */}
      <div className="relative h-[150px] w-full overflow-hidden">
        <img
          src={course.imageURL}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <span
          className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-primary 
                     text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm uppercase tracking-wider"
        >
          {course.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-sm text-secondary font-bold leading-snug line-clamp-1 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-[12px] line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between mt-2 pb-3 border-b">
          <div className="flex gap-1.5 text-[11px]">
            <FiClock className="text-primary" />
            <span>{course.duration} Weeks</span>
          </div>
          <div className="text-sm font-bold text-secondary">
            <span className="text-primary mr-0.5">৳</span>
            {course.price}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-3 mb-2">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
            <FiCalendar />
            {new Date(course.created_ad).toLocaleDateString()}
          </div>

          <Link
            to={`/course-details/${course._id}`}
            className="text-primary text-xs font-bold hover:underline underline-offset-4"
          >
            Details
          </Link>
        </div>

        {/* Primary Action Button */}
        <Link
          to={`/course-details/${course._id}`}
          className="mt-auto text-center bg-primary text-white
                     text-xs py-2.5 rounded-xl font-bold
                     shadow-sm hover:bg-indigo-700 
                     active:scale-95 transition-all"
        >
          Enroll Now
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
