import { useState } from "react";
import useCourses from "../Hooks/useCourses";
import CourseCard from "../Components/CourseCard";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";
import { FiSearch, FiFilter, FiChevronDown, FiXCircle } from "react-icons/fi";

const Courses = () => {
  const { courses, loading, error } = useCourses();

  // States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  // Filtering & Sorting Logic
  let processedCourses = [...courses];

  if (searchTerm) {
    processedCourses = processedCourses.filter((course) =>
      course.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (selectedCategory !== "All") {
    processedCourses = processedCourses.filter(
      (course) => course.category === selectedCategory
    );
  }

  processedCourses = processedCourses.filter(
    (course) => course.price >= priceRange.min && course.price <= priceRange.max
  );

  if (sortOption === "price-asc") {
    processedCourses.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    processedCourses.sort((a, b) => b.price - a.price);
  }

  // Pagination
  const totalPages = Math.ceil(processedCourses.length / itemsPerPage);
  const currentData = processedCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pb-20">
      <title>EduLearn | All Courses</title>

      {/* --- Page Header --- */}
      <div className="py-16 mb-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-secondary mb-4 leading-tight">
            Elevate Your <span className="text-primary">Skills</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            আপনার পছন্দের ক্যাটাগরি এবং বাজেটের মধ্যে সেরা কোর্সগুলো খুঁজে নিন
            এবং আজই শেখা শুরু করুন।
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* --- Advanced Control Panel --- */}
        <div className="p-4 md:p-6 rounded-[2rem] border-2 border-secondary mb-12 -mt-20 relative z-10 flex flex-col lg:flex-row gap-6 items-center">
          {/* Search */}
          <div className="relative w-full lg:w-1/3 group">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-12 pr-4 py-3.5 border border-secondary rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary font-medium"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex flex-wrap gap-4 w-full lg:w-2/3 justify-center lg:justify-end items-center">
            {/* Price Range */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-secondary">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Price
              </span>
              <input
                type="number"
                placeholder="Min"
                className="w-20 bg-transparent text-sm font-bold text-secondary focus:outline-none"
                onChange={(e) =>
                  setPriceRange({
                    ...priceRange,
                    min: Number(e.target.value) || 0,
                  })
                }
              />
              <span className="text-slate-300">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-20 bg-transparent text-sm font-bold text-secondary focus:outline-none"
                defaultValue={20000}
                onChange={(e) =>
                  setPriceRange({
                    ...priceRange,
                    max: Number(e.target.value) || 20000,
                  })
                }
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
                className="flex items-center gap-3 px-5 py-3.5 border border-secondary rounded-2xl font-bold text-secondary hover:shadow-md transition-all min-w-[160px] justify-between"
              >
                <span className="truncate">
                  {selectedCategory === "All" ? "Categories" : selectedCategory}
                </span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    isCategoryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCategoryDropdownOpen && (
                <ul className="absolute right-0 mt-3 w-56 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[1.5rem] shadow-2xl z-50 p-2 overflow-hidden animate-in fade-in zoom-in duration-200">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                          selectedCategory === cat
                            ? "bg-primary text-white shadow-lg shadow-indigo-200"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Sorting */}
            <div className="relative">
              <select
                className="appearance-none border border-secondary px-6 py-3.5 rounded-2xl font-bold text-secondary focus:outline-none hover:shadow-md transition-all cursor-pointer pr-10"
                onChange={(e) => setSortOption(e.target.value)}
                value={sortOption}
              >
                <option value="default">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
          </div>
        </div>

        {/* --- Results Section --- */}
        <div className="flex items-center justify-between mb-8 px-2">
          <p className="text-secondary font-bold">
            Showing{" "}
            <span className="text-primary text-xl font-black">
              {processedCourses.length}
            </span>{" "}
            Courses
          </p>
          {(searchTerm || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="text-xs font-bold text-red-500 flex items-center gap-1 hover:underline"
            >
              <FiXCircle /> Clear Filters
            </button>
          )}
        </div>

        {currentData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentData.map((course) => (
              <div key={course._id} className="group">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <FiSearch size={40} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">
              No Courses Found
            </h3>
            <p className="text-neutral mb-8">
              আপনার সার্চের সাথে মেলে এমন কোনো কোর্স খুঁজে পাওয়া যায়নি।
            </p>
            <button
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-indigo-100 transition-all"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setPriceRange({ min: 0, max: 20000 });
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* --- Modern Pagination --- */}
        {processedCourses.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-3 mt-20">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-12 h-12 flex items-center justify-center rounded-2xl border border-secondary text-secondary disabled:opacity-30 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
            >
              ❮
            </button>
            <div className="flex items-center gap-2 bg-secondary p-1.5 rounded-[1.2rem]">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-10 h-10 rounded-[1rem] text-sm font-bold transition-all duration-300 ${
                    currentPage === index + 1
                      ? "bg-white text-secondary shadow-sm scale-110"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-12 h-12 flex items-center justify-center rounded-2xl border border-secondary text-secondary disabled:opacity-30 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
            >
              ❯
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
