import type { NextPage } from 'next'
import { CameraIcon } from '@heroicons/react/20/solid'
import Hero from '../components/Hero'
import { TeamSection } from '../components/TeamSection'
import { Testimonial } from '../components/Testimonial'
import { Footer } from '../components/Footer'
import { Incentive } from '../components/Incentive'
import Image from 'next/image'
const Home: NextPage = () => {
	return (
		<div className='overflow-hidden bg-white'>
			<Hero />
			<Incentive />
			<div className='relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
				<div className='absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block' />
				<div className='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
					<div>
						<h2 className='text-lg font-semibold text-indigo-600'></h2>
						<h3 className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
							About me
						</h3>
					</div>
				</div>
				<div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
					<div className='relative lg:col-start-2 lg:row-start-1'>
						<svg
							className='absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block'
							width={404}
							height={384}
							fill='none'
							viewBox='0 0 404 384'
							aria-hidden='true'>
							<defs>
								<pattern
									id='de316486-4a29-4312-bdfc-fbce2132a2c1'
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits='userSpaceOnUse'>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className='text-gray-200'
										fill='currentColor'
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
							/>
						</svg>
						<div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
							<figure>
								<div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
									<Image
										className='rounded-lg object-cover object-center shadow-lg'
										src='https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80'
										alt='Whitney leaning against a railing on a downtown street'
										width={1184}
										height={1376}
									/>
								</div>
								<figcaption className='mt-3 flex text-sm text-gray-500'>
									<CameraIcon
										className='h-5 w-5 flex-none text-gray-400'
										aria-hidden='true'
									/>
									<span className='ml-2'>
										Photograph by Marcus O&apos;Leary
									</span>
								</figcaption>
							</figure>
						</div>
					</div>
					<div className='mt-8 lg:mt-0'>
						<div className='mx-auto max-w-prose text-base lg:max-w-none'>
							<p className='text-lg text-gray-500'>
								Wow this is a great looking about me section. But ok ok I must
								admit, this picture is not of me, it&apos;s just a random
								picture from the tailwind site. I guess it&apos;s a good time to
								tell you, I made this site using Next and Tailwind.
							</p>
						</div>
						<div className='prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none'>
							<p>
								Tailwind is a utility-first CSS framework packed with classes
								like{' '}
								<code className='bg-slate-200'>
									flex, pt-4, text-center and rotate-90
								</code>{' '}
								that can be composed to build any design, directly in your
								markup. It also has a thriving and robust ecosystem from which
								to draw inspiration and leverage.
							</p>
							<p>
								I love making beautiful websites, but I also love building
								complex web apps using state of the art technologies like:
							</p>

							<ul role='list'>
								<li>
									<a href='https://tanstack.com/query/v4'>React Query</a>
								</li>
								<li>
									{' '}
									<a href='https://tanstack.com/router/v4'>Tanstack Router</a>
								</li>
								<li>
									<a href='https://zod.dev/'>Zod</a>
								</li>
								<li>
									<a href='https://nextjs.org/'>Next.js</a>
								</li>
							</ul>
							<p>
								The more I code, the more I appreciate simple, clean code, and
								type safety. I never code without{' '}
								<code className='bg-slate-200'>TypeScript</code> these days.
							</p>
							<h3>Ok, but when are you going to show me the hard stuff...</h3>
							<p>
								Well actually making a clean UI is not easy and takes a lot of
								learning, but since you asked. Here are some pretty cool looking
								components...
							</p>
						</div>
					</div>
				</div>
			</div>

			<TeamSection />
			<Testimonial />
			<Footer />
		</div>
	)
}

export default Home
