import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col 
                 transform transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative">
        <motion.img
          src={course.imageURL}
          alt={course.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        {/* Category */}
        <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      {/* Title */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
          {course.title}
        </h2>

        {/* Duration & Price */}
        <div className="flex justify-between items-center text-gray-600 mt-2">
          <span className="text-sm">Week {course.duration}</span>
          <span className="text-sm font-semibold">৳{course.price}</span>
        </div>

        {/* Dates */}
        <div className="text-xs text-gray-400 mt-1">
          Start {course.course_start_date}
        </div>
        <motion.div
          className="mt-auto w-full rounded-xl p-[2px] overflow-hidden relative"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            background:
              "linear-gradient(90deg, #6366F1, #EC4899, #F59E0B, #10B981)",
            backgroundSize: "300% 300%",
          }}
        >
          <Link
            to={`/course-details/${course._id}`}
            className="block w-full text-center text-white py-2 rounded-lg 
                       font-semibold hover:text-gray-200 transition-colors duration-300"
          >
            View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
