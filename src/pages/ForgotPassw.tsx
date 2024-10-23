import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            src={Logo} 
            alt="Rwandan Emblem" 
            className="w-24 h-24"
          />
        </div>
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 font-jakarta">Forgot password</h2>
        <p className="text-sm text-center text-gray-500 font-jakarta">Please enter the email you use for login</p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-jakarta">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-2 mt-1 text-gray-900 bg-white-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
        
        {/* OR Divider */}
        <div className="flex items-center justify-center mt-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-sm text-gray-500 font-jakarta">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Login link */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Remembered your password? <Link to="/login" className="text-blue-500 hover:underline font-jakarta">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
