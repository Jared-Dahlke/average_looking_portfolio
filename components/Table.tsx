import {
	CheckCircleIcon,
	ChevronRightIcon,
	EnvelopeIcon
} from '@heroicons/react/20/solid'

const people = [
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	}
	// More people...
]

const applications = [
	{
		applicant: {
			name: 'Ricardo Cooper',
			email: 'ricardo.cooper@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		},
		date: '2020-01-07',
		dateFull: 'January 7, 2020',
		stage: 'Completed phone screening',
		href: '#'
	},
	{
		applicant: {
			name: 'Kristen Ramos',
			email: 'kristen.ramos@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		},
		date: '2020-01-07',
		dateFull: 'January 7, 2020',
		stage: 'Completed phone screening',
		href: '#'
	},
	{
		applicant: {
			name: 'Ted Fox',
			email: 'ted.fox@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		},
		date: '2020-01-07',
		dateFull: 'January 7, 2020',
		stage: 'Completed phone screening',
		href: '#'
	}
]

export function MyTable() {
	return (
		<div className='px-8 sm:px-6 lg:px-8 mt-32'>
			<div className='sm:flex sm:items-center'>
				<div className='sm:flex-auto'>
					<h1 className='text-xl font-semibold text-gray-900'>People</h1>
					<p className='mt-2 text-sm text-gray-700'>
						Here is an example of a table I can build
					</p>
				</div>
				<div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
					<button
						type='button'
						className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'>
						Add candidate
					</button>
				</div>
			</div>
			<div className='mt-8 flex flex-col'>
				<div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
						<div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
							<div className='overflow-hidden bg-white shadow sm:rounded-md'>
								<ul role='list' className='divide-y divide-gray-200'>
									{applications.map((application) => (
										<li key={application.applicant.email}>
											<a
												href={application.href}
												className='block hover:bg-gray-50'>
												<div className='flex items-center px-4 py-4 sm:px-6'>
													<div className='flex min-w-0 flex-1 items-center'>
														<div className='flex-shrink-0'>
															<img
																className='h-12 w-12 rounded-full'
																src={application.applicant.imageUrl}
																alt=''
															/>
														</div>
														<div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
															<div>
																<p className='truncate text-sm font-medium text-indigo-600'>
																	{application.applicant.name}
																</p>
																<p className='mt-2 flex items-center text-sm text-gray-500'>
																	<EnvelopeIcon
																		className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
																		aria-hidden='true'
																	/>
																	<span className='truncate'>
																		{application.applicant.email}
																	</span>
																</p>
															</div>
															<div className='hidden md:block'>
																<div>
																	<p className='text-sm text-gray-900'>
																		Applied on{' '}
																		<time dateTime={application.date}>
																			{application.dateFull}
																		</time>
																	</p>
																	<p className='mt-2 flex items-center text-sm text-gray-500'>
																		<CheckCircleIcon
																			className='mr-1.5 h-5 w-5 flex-shrink-0 text-green-400'
																			aria-hidden='true'
																		/>
																		{application.stage}
																	</p>
																</div>
															</div>
														</div>
													</div>
													<div>
														<ChevronRightIcon
															className='h-5 w-5 text-gray-400'
															aria-hidden='true'
														/>
													</div>
												</div>
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
