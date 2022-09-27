/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FlashSale from './FlashSale';
import ProductList from './ProductList';

function MainHome() {
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div
          className="h-64 rounded-md overflow-hidden bg-cover bg-center"
          style={{
					  backgroundImage:
							'url("https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144")',
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Men</h2>
              <p className="mt-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident
                molestias ipsam sint voluptatum pariatur.
              </p>
              <Link to="/products/men">
                <button type="button" className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>Shop Now</span>
                  <BsArrowRight className="ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex mt-8 md:-mx-4">
          <div
            className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style={{
						  backgroundImage:
								'url("https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")',
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">Women</h2>
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
                  facere provident molestias ipsam sint voluptatum pariatur.
                </p>
                <Link to="/products/women">
                  <div className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Shop Now</span>
                    <BsArrowRight className="ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
            style={{
						  backgroundImage:
								'url("https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")',
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">Random</h2>
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere
                  provident molestias ipsam sint voluptatum pariatur.
                </p>
                <Link to="/products/random">
                  <div className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Shop Now</span>
                    <BsArrowRight className="ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <FlashSale />
        <div className="mt-16">
          <h3 className="text-gray-600 text-2xl font-medium">Recommendations Product</h3>
          <ProductList />
        </div>
      </div>
    </main>
  );
}

export default MainHome;
