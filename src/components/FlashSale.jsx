import React from 'react';
import CardProductFlash from './CardProductFlash';
import { flashSale } from '../data';

const FlashSale = () => {
	return (
		<div
			className='mt-16 p-4 rounded-xl'
			style={{
				backgroundImage: 'url("https://www.static-src.com/siva/asset//03_2022/fs-bg-mar.png")',
			}}
		>
			<h3 className='text-white text-2xl font-medium ml-2'>FLASH SALE</h3>
			<div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2 p-4'>
				{flashSale.map((item) => (
					<CardProductFlash item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default FlashSale;
