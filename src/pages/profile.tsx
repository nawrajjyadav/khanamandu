import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://intercare.org.uk/about-us/the-team/staff-photo/"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Nawraj Yadav</h2>
          <p className="text-gray-600">Software Developer</p>
        </div>
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-medium text-gray-700">About Me</h3>
          <p className="text-gray-600 mt-2 text-center">
            Passionate software developer with experience in modern web technologies. I love
            building scalable applications and working with the latest frameworks.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-700">Location</h4>
            <p className="text-gray-600">kathmandu, old baneshwar</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-700">Email</h4>
            <p className="text-gray-600">nawraj.yadav1122@pcmgmt.edu.np</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-700">Phone</h4>
            <p className="text-gray-600">+977-9874561236</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-700">Website</h4>
            <p className="text-gray-600">www.nawraj.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;