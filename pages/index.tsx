import type { NextPage } from 'next'
import { CameraIcon } from '@heroicons/react/20/solid'
import Hero from '../components/Hero'
import { TeamSection } from '../components/TeamSection'
import { Testimonial } from '../components/Testimonial'
import { Footer } from '../components/Footer'
import { Incentive } from '../components/Incentive'
import Image from 'next/image'
import { MyTable } from '../components/Table'
import { MyCalendar } from '../components/Calendar'
import { Feature } from '../components/FeatureSection'
const Home: NextPage = () => {
	return (
		<div className='overflow-hidden bg-white'>
			<Hero />
			<Incentive />
			<TeamSection />
			<Testimonial />
			<MyTable />
			<MyCalendar />
			<Feature />
			<Footer />
		</div>
	)
}

export default Home
