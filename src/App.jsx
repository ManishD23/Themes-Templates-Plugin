import { useState, useEffect } from "react";
import "./index.css";
import React from "react";

const App = () => {
  const [formdata, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    pincode: "",
    address: "",
    gender: "",
  });

  const [error, setError] = useState("");

  const [savedData, setSavedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.mobile.length > 10 || formdata.mobile.length < 10) {
      setError("Mobile number should be exactly 10 digits");
      return;
    }
    if (formdata.pincode.length > 6 || formdata.pincode.length < 6) {
      setError("Pincode should be 6 digits or less");
      return;
    }
    setError("");
    localStorage.setItem("formData", JSON.stringify(formdata));
    setSavedData(formdata);
    setFormData((prevState) => ({
      ...prevState,
      name: "",
      lastname: "",
      email: "",
      mobile: "",
      pincode: "",
      address: "",
      gender: "",
    }));
  };

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">
          Form Page
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5 md:space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              First Name:
            </label>
            <input
              value={formdata.name}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Last Name:
            </label>
            <input
              value={formdata.lastname}
              type="text"
              id="lastName"
              name="lastname"
              placeholder="Enter Your Last Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              value={formdata.email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="mobileNo"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Mobile No:
            </label>
            <input
              value={formdata.mobile}
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter Your Mobile No"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="pincode"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Pincode:
            </label>
            <input
              value={formdata.pincode}
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Enter Your Pincode"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Address:
            </label>
            <input
              value={formdata.address}
              type="text"
              id="address"
              name="address"
              placeholder="Enter Your Address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Gender:
            </label>
            <select
              value={formdata.gender}
              id="gender"
              name="gender"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </form>
        {savedData && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Saved Data
            </h2>
            <p className="text-sm text-gray-700">
              <strong>Name:</strong> {savedData.name}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Last Name:</strong> {savedData.lastname}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Email:</strong> {savedData.email}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Mobile:</strong> {savedData.mobile}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Pincode:</strong> {savedData.pincode}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Address:</strong> {savedData.address}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Gender:</strong> {savedData.gender}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
