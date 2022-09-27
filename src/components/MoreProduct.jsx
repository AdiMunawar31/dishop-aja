import React from 'react';
import { moreProduct } from '../data';
import CardProduct from './CardProduct';

const MoreProduct = () => {
	return (
		<div className='mt-16'>
			<h3 className='text-gray-600 text-2xl font-medium'>More Product</h3>
			<div className='grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
				{moreProduct.map((item) => (
					<CardProduct item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default MoreProduct;
