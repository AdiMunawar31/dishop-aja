import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="flex flex-col items-center mt-40">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#8e5f27] h-4 w-8 rounded-t-md" />
          <div className="w-12 h-60 bg-[#0c2e41] rounded-t-md" />
          <div className="w-12 h-2 bg-yellow-600 rounded-t-full -mt-2" />
          <div className="bg-[#8e5f27] h-4 w-8 rounded-t-md" />
        </div>
        <div
          className="bg-gray-700 box-content h-52 w-[500px] relative border-[#0c2e41] border-8 slide-ltr sliding-ltr flex flex-row ease"
        >
          <img className="h-full object-fit" src="/dishop.png" alt="logo" />
        </div>
      </div>
      <Link to="/">
        <button
          type="button"
          className="bg-gray-700 rounded-md text-white font-bold px-6 h-12 relative
            before:w-full before:h-full before:scale-x-[1.15] before:scale-y-[1.35]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%]
            before:from-rose-500 before:to-yellow-500 before:bg-gradient-to-br
            before:rounded-md
            hover:bg-gray-600 transition-all duration-300
"
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default Success;
