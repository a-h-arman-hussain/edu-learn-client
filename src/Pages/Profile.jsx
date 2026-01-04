import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { FiEdit3, FiMail, FiUser, FiCamera, FiX } from "react-icons/fi";

const Profile = () => {
  const { user } = use(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleEditProfile = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Profile Updated!",
          showConfirmButton: false,
          timer: 1500,
          customClass: { popup: "rounded-[2rem]" },
        });
        setIsModalOpen(false);
      })
      .catch((error) => {
        Swal.fire({ icon: "error", title: "Oops!", text: error.message });
      });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <title>EduLearn | My Profile</title>

      <div className="rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        {/* Profile Header Background */}
        <div className="h-40 bg-gradient-to-r from-indigo-600 to-primary relative">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
            <div className="p-1.5 bg-white rounded-full shadow-xl">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-100 border-4 border-white flex items-center justify-center relative group">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl font-black text-primary">
                    {user?.displayName?.[0]}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="pt-20 pb-12 px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h2 className="text-3xl font-black text-secondary">
                {user?.displayName}
              </h2>
              <div className="flex items-center gap-2 text-slate-400 mt-1 font-medium">
                <FiMail />
                <span>{user?.email}</span>
              </div>
              <div className="inline-block mt-4 px-4 py-1.5 bg-indigo-50 text-primary text-xs font-black uppercase tracking-widest rounded-full">
                Verified Student
              </div>
            </div>
            <button
              onClick={handleEditProfile}
              className="flex items-center gap-2 bg-slate-50 text-secondary px-6 py-3 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <FiEdit3 /> Edit Profile
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                Full Name
              </p>
              <p className="text-secondary font-bold text-lg">
                {user?.displayName || "Not Set"}
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                Account Status
              </p>
              <p className="text-emerald-600 font-bold text-lg">Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Modern Edit Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-xl font-black text-secondary">
                Update Profile
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <FiX size={24} className="text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleUpdateProfile} className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <div className="relative mt-1">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-bold text-secondary transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                    Photo URL
                  </label>
                  <div className="relative mt-1">
                    <FiCamera className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="url"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-bold text-secondary transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 py-4 bg-slate-100 text-secondary font-black rounded-2xl hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
