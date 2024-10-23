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
      <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center flex-col relative">
        <img src={Logo} alt="MINISPORTS Logo" className="w-24" />
        <h1 className="font-jakarta text-2xl font-extrabold text-blue-900 mt-4">MIS - MINISPORTS</h1>

        {/* Flex container for the icons */}
        <div className="absolute mt-10 gap-10 bottom-36 left-0">
          <img
            src={bigicon}
            alt="icon"
            height={200}
            width={200}
            className="flex justify-start items-start px-0  "
          />

        
        </div>
        <div className="absolute mt-10 gap-10 bottom-28 right-16">
          <img
              src={smallicon}
              alt="icon2"
              height={100}
              width={100}
              className='my-2'
            />
        </div>

        {/* Links */}
        <div className="absolute bottom-6 flex justify-center space-x-6 text-sm  text-blue-700">
          <a href="/terms" className="hover:underline">Terms of service</a>
          <a href="/privacy" className="hover:underline">Privacy policy</a>
          <a href="/support" className="hover:underline">Support</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-6 mt-20 ml-4 mr-4">
        <div className="max-w-lg w-full"> {/* Increased max width */}
          {/* Logo only for smaller screens */}
          <div className="block md:hidden mb-4 text-center">
            <img src={Logo} alt="MINISPORTS Logo" className="w-24 mx-auto" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg border"> {/* Added more padding */}
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

            {/* Added more space between OR divider and the text */}
            <div className="flex items-center justify-center mt-8 gap-4"> 
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-sm text-gray-500 font-jakarta">OR</span>
              <hr className="w-full border-gray-300" />
            </div>

            <p className="text-center text-sm mt-8"> {/* Increased space here */}
              Don’t have an account? <a href="/contact-us" className="text-blue-600 hover:underline">Contact us</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
