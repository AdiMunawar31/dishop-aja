import React from 'react';
import { AiFillMinusSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { IoBagCheckOutline } from 'react-icons/io5';
import MoreProduct from './MoreProduct';

const ProductDetail = () => {
	return (
		<main className='my-8'>
			<div className='container mx-auto px-6'>
				<div className='md:flex md:items-center'>
					<div className='w-full h-64 md:w-1/2 lg:h-96'>
						<img
							className='h-full w-full rounded-md object-cover max-w-lg mx-auto'
							src='https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
							alt='Nike Air'
						/>
					</div>
					<div className='w-full max-w-lg mx-auto md:ml-8 md:mt-0 md:w-1/2'>
						<h3 className='text-gray-700 uppercase text-xl font-semibold mb-4'>
							Air Jordan 1 Retro High OG TD 'Tie-Dye' Unisex
						</h3>
						<span className='text-blue-500 text-3xl font-semibold'>Rp2.800.000</span>
						<div className='mt-4'>
							<label className='text-gray-700 text-sm' htmlFor='count'>
								Count:
							</label>
							<div className='flex items-center mt-1'>
								<button className='text-gray-500 focus:outline-none focus:text-gray-600'>
									<BsFillPlusSquareFill className='text-blue-500 text-2xl' />
								</button>
								<span className='text-gray-700 text-lg mx-2'>20</span>
								<button className='text-gray-500 focus:outline-none focus:text-gray-600'>
									<AiFillMinusSquare className='text-red-500 text-3xl' />
								</button>
							</div>
						</div>
						<div className='mt-3'>
							<label className='text-gray-700 text-sm' htmlFor='count'>
								Color:
							</label>
							<div className='flex items-center mt-1'>
								<button className='h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none' />
								<button className='h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none' />
								<button className='h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none' />
							</div>
						</div>
						<div className='flex items-center mt-6'>
							<button className='mx-2 flex items-center text-blue-100 border bg-blue-500 rounded-md py-2 px-6 hover:bg-blue-400 focus:outline-none'>
								<IoBagCheckOutline className='text-xl text-white mr-2' />
								Order Now
							</button>
							<button className='mx-2 flex items-center text-blue-500 border border-blue-500 rounded-md py-2 px-6 hover:bg-blue-200 focus:outline-none'>
								<AiOutlineShoppingCart className='text-xl text-blue-500 mr-2' />
								<span>Add To Cart</span>
							</button>
						</div>
					</div>
				</div>
				<MoreProduct />
			</div>
		</main>
	);
};

export default ProductDetail;
