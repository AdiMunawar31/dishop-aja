import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CardProductFlash = ({ item }) => {
	return (
		<div>
			<div className='mr-2 w-64 xl:mb-0 mb-8'>
				<div>
					<img alt='person capturing an image' src={item.img} className='w-full h-52 rounded-tr-md rounded-tl-md' />
				</div>
				<div className='bg-white rounded-br-md rounded-bl-md'>
					<div className='flex items-center justify-between px-4 pt-4'>
						<div>
							<AiOutlineShoppingCart className='text-2xl text-blue-600' />
						</div>
						<div className='bg-yellow-200 py-1.5 px-6 rounded-full'>
							<p className='text-xs text-yellow-700'>FLASH SALE</p>
						</div>
					</div>
					<div className='px-4 py-2'>
						<div className='flex items-center'>
							<h2 className='text-lg'>{item.title}</h2>
						</div>

						<div className='py-1'>
							<h2 className='text-blue-700 text-lg font-semibold'>{item.price}</h2>
							<h3 className='text-gray-400 text-sm font-light'>
								<strike>Rp.200.000</strike>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProductFlash;
