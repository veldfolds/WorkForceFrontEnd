import React, { useState, useEffect } from 'react';

export const EmployeeForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("form changes detected");
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log('EmployeeForm rendered with onSubmit:', typeof onSubmit);
  }, [onSubmit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting details");
    if(formData !== null || "")
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Employee</h2>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="First Name"
            />
            <label htmlFor="firstName" className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-600">First Name</label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="Last Name"
            />
            <label htmlFor="lastName" className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-600">Last Name</label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
            <label htmlFor="email" className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-600">Email</label>
          </div>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="Phone"
            />
            <label htmlFor="phone" className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-600">Phone</label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="Department"
            />
            <label htmlFor="department" className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-600">Department</label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="Address"
            />
            <label htmlFor="address" className="absolute left-0 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-600">Address</label>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
