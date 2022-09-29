import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/apiCalls';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    navigate('/');
  };

  return (
    <div>
      <div className="min-h-screen overflow-hidden bg-blue-500 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-blue-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block" />
        <div className="absolute w-48 h-48 rounded-xl bg-blue-400 bottom-6 right-10 transform rotate-12 hidden md:block" />
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome Back!</h1>
            <p className="w-80 text-center text-sm mb-4 font-semibold text-gray-700">
              Sign in to access your account
            </p>
            {error && <p className="text-red-700 text-sm text-center w-80 rounded-md bg-red-200 p-3">Email or Password is invalid...</p>}
          </div>
          <div className="space-y-4 mt-4">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="py-3 w-full text-xl text-white bg-blue-500 rounded-lg"
              onClick={handleClick}
              disabled={isFetching}
            >
              {isFetching ? 'Loading...' : 'Login'}
            </button>

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
