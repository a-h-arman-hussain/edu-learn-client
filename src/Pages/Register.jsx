import React, { use, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import {
  FiUser,
  FiMail,
  FiLock,
  FiImage,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password!",
        text: "পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর এবং সর্বনিম্ন ৬টি ক্যারেক্টার থাকতে হবে।",
        confirmButtonColor: "#4338ca",
        customClass: { popup: "rounded-[2rem]" },
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: `স্বাগতম ${name}! আপনার অ্যাকাউন্টটি সফলভাবে তৈরি হয়েছে।`,
          timer: 2500,
          showConfirmButton: false,
          customClass: { popup: "rounded-[2rem]" },
        });

        setUser({ ...user, displayName: name, photoURL: photoUrl });
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          customClass: { popup: "rounded-[2rem]" },
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 relative overflow-hidden rounded-[2.5rem] ">
      <title>EduLearn | Register</title>

     

      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-secondary tracking-tight">
            Create <span className="text-primary">Account</span>
          </h2>
          <p className="mt-2 text-slate-400 font-medium">
            আজই যোগ দিন এবং আপনার শেখার যাত্রা শুরু করুন
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div className="md:col-span-1">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
              Full Name
            </label>
            <div className="relative mt-2">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-medium"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="md:col-span-1">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
              Photo URL
            </label>
            <div className="relative mt-2">
              <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input
                type="text"
                name="photoUrl"
                required
                placeholder="https://image.link"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-medium"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="md:col-span-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
              Email Address
            </label>
            <div className="relative mt-2">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-medium"
              />
            </div>
          </div>

          {/* Password */}
          <div className="md:col-span-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
              Secure Password
            </label>
            <div className="relative mt-2">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-100 text-secondary rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary transition-colors"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          <button className="md:col-span-2 w-full py-4 bg-primary text-white text-sm font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 mt-4">
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-slate-500 font-medium">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-black hover:underline underline-offset-4"
            >
              Log in instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
