import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import bigicon from '../assets/bigger.svg';
import smallicon from '../assets/smaller.svg';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submit logic here
    console.log({ email, password });
  };

  return (
    <div className="flex min-h-screen bg-white font-jakarta">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center flex-col">
        <img src={Logo} alt="MINISPORTS Logo" className="w-24" />
        <h1 className="font-jakarta text-2xl font-extrabold text-blue-900 mt-4">MIS - MINISPORTS</h1>

        {/* Flex container for the icons */}
        <div className="flex justify-between items-center w-full px-4 mt-10">
          <img
            src={bigicon}
            alt="icon"
            height={200}
            width={200}
            className="mb-6"
          />

          <img
            src={smallicon}
            alt="icon2"
            height={40}
            width={40}
            className='mx-10 my-2 gap-6 py-10 flex'
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-6">
        <div className="max-w-md w-full">
          {/* Logo only for smaller screens */}
          <div className="block md:hidden mb-4 text-center">
            <img src={Logo} alt="MINISPORTS Logo" className="w-24 mx-auto" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 justify-center items-center flex">Login to continue</h2>
            <p className="text-gray-500 mb-6">Welcome back, enter your credentials to continue</p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-900" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-900" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              {/* Use Link for navigation */}
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200">
              Login
            </button>

            <div className="text-center text-sm text-gray-600 my-4">OR</div>

            <p className="text-center text-sm">
              Don’t have an account? <a href="/contact-us" className="text-blue-600 hover:underline">Contact us</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
