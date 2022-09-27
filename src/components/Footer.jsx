import React from 'react';

const Footer = () => {
	return (
		<footer className='font-sans relative pt-20 mt-20 pb-3 md:pb-6 bg-gray-900 text-white'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-wrap'>
					<div className='flex w-full md:w-4/12'>
						<div className='text-2xl px-4'>
							<img src='/dishop.png' width={200} alt='logo' />

							<p className='mt-2 mb-4 text-gray-400 dark:text-gray-400 text-sm'>
								Language is humanity's greatest open-source project.
							</p>
						</div>
					</div>
					<div className='flex w-full md:w-5/12 px-4'>
						<div className='text-2xl'>
							<p className='font-bold text-gray-100'>Subsrcibe</p>
							<p className='mt-2 mb-4 text-gray-400 text-sm'>Get timely updates from your favorite products.</p>
							<div className='my-4'>
								<form id='footerForm' action='/subscribe/' method='POST' className='form-horizontal'>
									<input
										type='email'
										name='email'
										size={30}
										className='p-2.5 border border-grey-light rounded-md text-black placeholder-gray-400 text-sm h-auto
                                  focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent'
										placeholder='Enter Email Address'
										required='required'
									/>
									<button className='bg-blue-500 rounded-md ml-1 text-white active:bg-blue-400 shadow hover:shadow-lg outline-none focus:outline-none h-auto text-xs py-3.5 px-4'>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className='flex w-full md:w-3/12 px-4'>
						<div className='flex flex-wrap items-top'>
							<div className='w-full  ml-auto'>
								<p className='font-bold text-2xl text-gray-100'>Contact Us</p>
								<ul className='list-unstyled mt-2 mb-4'>
									<li className='mt-2'>
										<a className='text-gray-400 hover:underline py-1 text-md' href='/tag/roadmap/'>
											Kuningan, Jawa Barat
										</a>
									</li>
									<li className='mt-2'>
										<a className='text-gray-400 hover:underline py-1 text-md' href='/tag/features/'>
											+628-156-637-545
										</a>
									</li>
									<li className='mt-2'>
										<a className='text-gray-400 hover:underline py-1 text-md' href='/tag/defi/'>
											contact@dishop.com
										</a>
									</li>
									<li className='mt-4'>
										<img src='https://i.ibb.co/Qfvn4z6/payment.png' alt='payment' />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr className='my-3 md:my-6 border-gray-700' />
			</div>
			<div className='container mx-auto px-6 py-3 flex justify-between items-center'>
				<a href='#' className='text-sm font-bold text-gray-500 hover:text-gray-400'>
					DISHOP-AJA © 2022 | Toko online dengan sensasi belanja ala mall.
				</a>
				<p className='py-2 text-gray-500 sm:py-0 mr-4'>All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
