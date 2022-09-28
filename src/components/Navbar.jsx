import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const { quantity } = useSelector((state) => state.cart);
  console.log(quantity);
  return (
    <div>
      <header className="bg-blue-500">
        <div className="mx-auto px-6 py-3">
          <div className="grid grid-cols-12">
            <div className="flex items-center justify-center text-gray-600 col-span-1 -mt-5">
              <Link to="/">
                <img src="/dishop.png" alt="logo" />
              </Link>
            </div>
            <div className="w-full col-span-8 text-gray-700 md:text-center text-2xl font-semibold">
              <form className="ml-4">
                <div
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Search
                </div>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none" />
                  <input
                    type="search"
                    id="default-search"
                    className="block p-3 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    placeholder="Search..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-1.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <BiSearch className="text-xl" />
                  </button>
                </div>
              </form>
              <p className="text-xs text-white font-light mt-2 text-start ml-6">
                Colgate SALE 55% OFF | Air Jordan SALE 45% OFF | Sony SPECIAL PROMO |
                CLEARANCE SALE Nutty Nuts | PROMO
                Fashion Pria
              </p>
            </div>
            <div className="col-span-3 flex items-center justify-center">
              <Link to="/cart">
                <button type="button" className="relative focus:outline-none text-white mx-4 sm:mx-0">
                  <span className="absolute -top-2 -right-2 w-6 h-5 bg-red-500 text-xs rounded-full px-1 py-0.5 font-semibold">{quantity}</span>
                  <AiOutlineShoppingCart className="text-2xl text-white" />
                </button>
              </Link>
              <div className="mx-6 h-12 border-r border-white" />
              <div className="flex justify-center gap-4">
                <Link to="/login">
                  <div className="px-6 py-2 cursor-pointer text-center rounded-md transition bg-blue-500 border hover:bg-blue-600 active:bg-gray-700 focus:bg-gray-600 text-xs">
                    <span className="block text-white font-semibold">Sign In</span>
                  </div>
                </Link>
                <Link to="/register">
                  <div className="px-6 py-2 cursor-pointer text-center rounded-md text-blue-500 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 text-xs">
                    <span className="block font-semibold">Sign Up</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
