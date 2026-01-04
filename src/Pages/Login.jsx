import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleDemoLogin = () => {
    setEmail("admin@gmail.com");
    setPassword("Admin!123");
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "info",
      title: "Demo credentials applied!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          text: `${result.user.displayName || "User"} logged in successfully.`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password. Please try again.",
        });
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Logged in with Google!",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({ icon: "error", title: "Oops!", text: error.message });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-[2.5rem]">
      <title>EduLearn | Login</title>

     
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
            <FaLock className="text-primary text-2xl" />
          </div>
          <h2 className="text-3xl font-black text-secondary tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-400 font-medium">
            আপনার লার্নিং জার্নি পুনরায় শুরু করতে লগইন করুন
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-slate-300" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 text-secondary placeholder-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all font-medium"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Password
                </label>
                <Link
                  to="/auth/forget-password"
                  size="sm"
                  className="text-xs font-bold text-primary hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-slate-300" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-100 text-secondary placeholder-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all font-medium"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black rounded-2xl text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-xl shadow-indigo-100 transition-all duration-300 active:scale-95"
            >
              Log in to Account
            </button>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-3 px-4 border-2 border-dashed border-slate-200 rounded-2xl text-xs font-bold text-slate-500 hover:border-primary hover:text-primary hover:bg-indigo-50/30 transition-all"
            >
              🚀 Use Demo Admin Access
            </button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">
              Or continue with
            </span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-slate-200 rounded-2xl text-sm font-bold text-secondary hover:bg-slate-50 transition-all active:scale-95"
        >
          <FcGoogle size={22} />
          Sign in with Google
        </button>

        <p className="text-center text-sm text-slate-500 font-medium">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-primary font-black hover:underline underline-offset-4"
          >
            Create for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
