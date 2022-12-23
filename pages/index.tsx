import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
			<Head>
				<title>Курский Иван | Портфолио</title>
			</Head>

			<Header />

			<section id='hero' className='snap-center'>
				<Hero />
			</section>

			<section>
				<About />
			</section>

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</div>
	)
}
