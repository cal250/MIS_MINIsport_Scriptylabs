import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/image 1.png';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Logo */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-20 sm:h-24 sm:w-24" // Responsive logo size
        />
      </div>

      {/* Content Box */}
      <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg text-center">
        {/* Heading */}
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 font-jakarta">Check your email</h1>

        {/* Instruction */}
        <p className="text-blue-950 mb-6 font-jakarta font-light text-sm sm:text-base lg:text-lg">
          We sent you an instruction on your email with an address that you will
          use to reset your password
        </p>

        {/* "Didn't receive email" Button */}
        <button className="bg-white font-jakarta font-semibold text-blue-600 py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 w-full sm:w-80 rounded hover:bg-blue-700 focus:outline-none mb-6 border">
          I didn’t receive email
        </button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Remembered your password? <Link to="/" className="text-blue-500 underline hover:underline font-jakarta">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
