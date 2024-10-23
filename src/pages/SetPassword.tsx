import React, { useState } from 'react';
import logo from '../assets/image1.png'; // Replace with your logo path

const SetNewPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Logo */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-24"
        />
      </div>

      {/* Content Box */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        {/* Heading */}
        <h1 className="text-xl font-semibold mb-2">Set a new password</h1>
        <p className="text-gray-500 mb-6">Reset your account's password</p>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Enter new password
          </label>
          <input
            id="password"
            type="password"
            placeholder="A strong one"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm new password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Reset Password Button */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 focus:outline-none">
          Reset password
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* Login Link */}
        <a href="/login" className="text-blue-600 hover:underline hover:text-blue-700">
          Remembered your password? Login
        </a>
      </div>
    </div>
  );
};

export default SetNewPasswordPage;
