import React from 'react';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const Home = () => {
	return (
		<div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-4xl sm:text-7xl font-bold text-white'>
						프론트엔드 개발자 조강훈입니다.
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						자기소개를 넣어볼까욤
					</p>
					<div>
						<button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-b-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
							Portfolio
							<span className='group-hover: rotate-90 duration-300'>
								<MdOutlineKeyboardArrowRight size={25} className='ml-1' />
							</span>
						</button>
					</div>
				</div>
				<div>
					<img src="https://www.w3schools.com/images/picture.jpg" alt='me' className="rounded-2xl mx-auto w=2/3 md:w-full"/>
				</div>
			</div>
		</div>
	)
}

export default Home;
