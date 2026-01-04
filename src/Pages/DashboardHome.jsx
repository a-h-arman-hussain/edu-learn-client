import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  Cell,
} from "recharts";
import useCourses from "../Hooks/useCourses";
import {
  FiBookOpen,
  FiUserCheck,
  FiActivity,
  FiArrowRight,
} from "react-icons/fi";

const DashboardHome = () => {
  const { myCourse, myEnrolledCourse, loading } = useCourses();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  const chartData = [
    { name: "Created", count: myCourse.length, color: "#4338ca" },
    { name: "Enrolled", count: myEnrolledCourse.length, color: "#10b981" },
  ];

  const stats = [
    {
      label: "Courses Created",
      value: myCourse.length,
      icon: <FiBookOpen size={24} />,
      color: "text-primary",
      bg: "bg-indigo-50",
    },
    {
      label: "Enrolled Courses",
      value: myEnrolledCourse.length,
      icon: <FiUserCheck size={24} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Total Activities",
      value: myCourse.length + myEnrolledCourse.length,
      icon: <FiActivity size={24} />,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* --- Welcome Header --- */}
      <div>
        <h2 className="text-3xl font-black text-secondary">
          Dashboard Overview
        </h2>
        <p className="mt-1">
          আপনার কোর্সের পরিসংখ্যান এবং সাম্প্রতিক কার্যক্রম এখানে দেখুন।
        </p>
      </div>

      {/* --- Stat Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
          >
            <div
              className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className={`text-3xl font-black ${stat.color}`}>
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- Analytics Charts --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-secondary mb-8">
            Course Analytics
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar dataKey="count" radius={[10, 10, 0, 0]} barSize={60}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-secondary mb-8">
            Activity Growth
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#4338ca"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                    fill: "#4338ca",
                    strokeWidth: 3,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- Recent Enrolled Table --- */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-xl font-bold text-secondary">
            Recent Enrolled Courses
          </h3>
          <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
            View All <FiArrowRight />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-slate-400 uppercase text-[11px] tracking-[0.2em] border-b border-slate-100">
                <th className="py-6 px-8">Course Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-secondary">
              {myEnrolledCourse.length > 0 ? (
                myEnrolledCourse.slice(0, 5).map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-slate-50/80 transition-colors border-b border-slate-50 last:border-0"
                  >
                    <td className="py-5 px-8">
                      <p className="font-bold text-secondary">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.category}</p>
                    </td>
                    <td className="text-sm font-medium">
                      {item.instructor || "EduLearn Team"}
                    </td>
                    <td>
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg font-bold text-sm">
                        ৳{item.price}
                      </span>
                    </td>
                    <td className="text-center">
                      <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-primary hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                        Continue Learning
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-20">
                    <div className="flex flex-col items-center opacity-30">
                      <FiBookOpen size={48} className="mb-2" />
                      <p className="font-bold">No courses enrolled yet.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
