import React, { use,  useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

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
          text: "Your profile information has been saved successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
        setIsModalOpen(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed!",
          text: error.message,
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-lg">
      <title>EduLearn | Profile</title>
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-6xl text-gray-400 font-bold">
              {user?.displayName?.[0]}
            </span>
          )}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {user?.displayName}
        </h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleEditProfile}
          className="btn btn-primary px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Edit Profile
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-gray-200">
            <h3 className="text-xl font-bold text-primary mb-4">
              Edit Profile
            </h3>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-primary mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div>
                <label className="block text-primary mb-1 font-medium">Photo URL</label>
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full border text-black border-indigo-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-outline text-primary px-4 py-2 rounded-lg hover:bg-gray-100 hover:border-primary transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                  Save
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
