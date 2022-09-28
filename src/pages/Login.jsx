import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className="min-h-screen overflow-hidden bg-blue-500 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-blue-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block" />
        <div className="absolute w-48 h-48 rounded-xl bg-blue-400 bottom-6 right-10 transform rotate-12 hidden md:block" />
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome Back!</h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Sign in to access your account
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <input
              type="text"
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          <div className="text-center mt-6">
            <Link to="/">
              <button type="submit" className="py-3 w-full text-xl text-white bg-blue-500 rounded-lg">Login</button>
            </Link>
            <p className="mt-4 text-sm">
              Dont Have An Account?
              <Link to="/register">
                <span className="underline cursor-pointer text-blue-500"> Register</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="w-40 h-40 absolute bg-blue-400 rounded-full top-0 right-12 hidden md:block" />
        <div className="w-20 h-40 absolute bg-blue-400 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
      </div>
    </div>
  );
}

export default Login;
