import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: `Welcome, ${name}! You can now log in.`,
          timer: 2500,
          showConfirmButton: false,
        });
        setUser({ ...user, displayName: name, photoURL: photoUrl });
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 flex items-center justify-center px-4">
      <title>EduLearn | Register</title>
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign up to start your learning journey
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              required
              placeholder="Photo URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-primary z-10"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button className="btn btn-primary w-full text-lg font-semibold">
            Register
          </button>
        </form>

        <div className="divider my-6 text-gray-400">OR</div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
