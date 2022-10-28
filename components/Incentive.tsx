import Image from 'next/image'
const incentives = [
	{
		name: 'Available Immediately',
		description:
			'Believe it or not, I can start building stuff for you right away.',
		imageSrc:
			'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg'
	},
	{
		name: 'Really good at web development',
		description: 'Wow, have you seen this site?  I am blown away.',
		imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg'
	},
	{
		name: 'Fast worker',
		description:
			"Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
		imageSrc:
			'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg'
	}
]

export function Incentive() {
	return (
		<div className='bg-gray-50'>
			<div className='mx-auto max-w-7xl py-24 sm:px-2 lg:px-4'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 px-4 lg:max-w-none lg:grid-cols-3'>
					{incentives.map((incentive) => (
						<div
							key={incentive.name}
							className='text-center sm:flex sm:text-left lg:block lg:text-center'>
							<div className='sm:flex-shrink-0'>
								<div className='flow-root'>
									<Image
										height={94}
										width={112}
										className='mx-auto h-24 w-28'
										src={incentive.imageSrc}
										alt=''
									/>
								</div>
							</div>
							<div className='mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0'>
								<h3 className='text-sm font-medium text-gray-900'>
									{incentive.name}
								</h3>
								<p className='mt-2 text-sm text-gray-500'>
									{incentive.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
