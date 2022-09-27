import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div>
			<div class='min-h-screen overflow-hidden bg-blue-500 flex justify-center items-center'>
				<div class='absolute w-60 h-60 rounded-xl bg-blue-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block'></div>
				<div class='absolute w-48 h-48 rounded-xl bg-blue-400 bottom-6 right-10 transform rotate-12 hidden md:block'></div>
				<div class='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
					<div>
						<h1 class='text-3xl font-bold text-center mb-4 cursor-pointer'>Create An Account</h1>
						<p class='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer'>
							Create an account to enjoy all the services without any ads for free!
						</p>
					</div>
					<div class='space-y-4'>
						<input
							type='text'
							placeholder='Usesrname'
							class='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
						/>
						<input
							type='text'
							placeholder='Email Addres'
							class='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
						/>
						<input
							type='text'
							placeholder='Password'
							class='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
						/>
						<input
							type='text'
							placeholder='Confirm Password'
							class='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
						/>
					</div>
					<div class='text-center mt-6'>
						<Link to='/login'>
							<button class='py-3 w-full text-xl text-white bg-blue-500 rounded-lg'>Register</button>
						</Link>
						<p class='mt-4 text-sm'>
							Already Have An Account?
							<Link to='/login'>
								<span class='underline cursor-pointer text-blue-500'> Login</span>
							</Link>
						</p>
					</div>
				</div>
				<div class='w-40 h-40 absolute bg-blue-400 rounded-full top-0 right-12 hidden md:block'></div>
				<div class='w-20 h-40 absolute bg-blue-400 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block'></div>
			</div>
		</div>
	);
};

export default Register;
