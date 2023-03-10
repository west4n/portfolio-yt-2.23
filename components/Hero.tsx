import React from 'react'
import Image from 'next/image'
import mainPhoto from '../assets/main-photo.jpeg'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Привет, меня зовут Иван',
			'Guy-who-loves-coffe.tsx',
			'<ButLovesToCodeMore />'
		],
		loop: true,
		delaySpeed: 2000
	})

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<Image
				className='relative rounded-full h-32 w-32 mx-auto object-cover'
				src={mainPhoto}
				alt=''
				priority
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					Web Developer
				</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>

				<div className='pt-5'>
					<Link href='#about'>
						<button className='heroButton'>Обо мне</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Опыт</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Навыки</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Проекты</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
