import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-blue-200 to-cyan-100 p-6">
      <div className="w-full max-w-2xl bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/30">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8 drop-shadow">Create Account</h2>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="example@mail.com"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Gender</label>
            <div className="flex gap-6">
              <label className="flex items-center text-gray-800">
                <input type="radio" name="gender" value="male" className="mr-2" required />
                Male
              </label>
              <label className="flex items-center text-gray-800">
                <input type="radio" name="gender" value="female" className="mr-2" required />
                Female
              </label>
            </div>
          </div>

          {/* DOB */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Date of Birth</label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Qualification</label>
            <select
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            >
              <option value="">Select</option>
              <option value="highschool">High School</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Department</label>
            <select
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            >
              <option value="">Select</option>
              <option value="hr">HR</option>
              <option value="it">Information Technology</option>
              <option value="finance">Finance</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="operations">Operations</option>
              <option value="support">Customer Support</option>
            </select>
          </div>

          {/* Position */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Position</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g. Team Lead"
              required
            />
          </div>

          {/* Hiring Date */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Hiring Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Salary (₹)</label>
            <input
              type="number"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Create Password */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Create Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="********"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="********"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 rounded-full transition duration-300 shadow-xl"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
