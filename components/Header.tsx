import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
	return (
		<header className='sticky top-0  p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1
				}}
				transition={{
					duration: 1.5
				}}
				className='flex flex-row items-center'
			>
				{/* Social Icons */}
				<SocialIcon
					url='https://t.me/west4n'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://vk.com/westf4n'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://instagram.com/westtfan'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%BA%D1%83%D1%80%D1%81%D0%BA%D0%B8%D0%B9-72b81021b'
					fgColor='gray'
					bgColor='transparent'
				/>
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1
				}}
				transition={{
					duration: 1.5
				}}
				className='flex flex-row items-center text-gray-300 cursor-pointer'
			>
				<SocialIcon
					className='cursor-pointer'
					network='email'
					fgColor='gray'
					bgColor='transparent'
				/>
				<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
					Свяжитесь со мной
				</p>
			</motion.div>
		</header>
	)
}
