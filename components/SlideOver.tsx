import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface IProps {
	open: boolean
	setOpen: (val: boolean) => void
}

export function SlideOver({ open, setOpen }: IProps) {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={setOpen}>
				<div className='fixed inset-0' />

				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16'>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-500 sm:duration-700'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500 sm:duration-700'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'>
								<Dialog.Panel className='pointer-events-auto w-screen max-w-2xl'>
									<div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
										<div className='px-4 py-6 sm:px-6'>
											<div className='flex items-start justify-between'>
												<Dialog.Title className='text-lg font-medium text-gray-900'>
													Profile
												</Dialog.Title>
												<div className='ml-3 flex h-7 items-center'>
													<button
														type='button'
														className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
														onClick={() => setOpen(false)}>
														<span className='sr-only'>Close panel</span>
														<XMarkIcon className='h-6 w-6' aria-hidden='true' />
													</button>
												</div>
											</div>
										</div>
										{/* Main */}
										<div className='divide-y divide-gray-200'>
											<div className='pb-6'>
												<div className='h-24 bg-indigo-700 sm:h-20 lg:h-28' />
												<div className='lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6'>
													<div>
														<div className='-m-1 flex'>
															<div className='inline-flex overflow-hidden rounded-lg border-4 border-white'>
																<Image
																	height={192}
																	width={192}
																	className='h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48'
																	src={
																		'https://i.ibb.co/yYFRHtp/240-E1-B5-E-0-D1-E-4407-836-B-35-C7-DEA562-F1.jpg'
																	}
																	alt=''
																/>
															</div>
														</div>
													</div>
													<div className='mt-6 sm:ml-6 sm:flex-1'>
														<div>
															<div className='flex items-center'>
																<h3 className='text-xl font-bold text-gray-900 sm:text-2xl'>
																	Jared Dahlke
																</h3>
																<span className='ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400'>
																	<span className='sr-only'>Online</span>
																</span>
															</div>
															<p className='text-sm text-gray-500'>
																@jareddahlke
															</p>
														</div>
														<div className='mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3'></div>
													</div>
												</div>
											</div>
											<div className='px-4 py-5 sm:px-0 sm:py-0'>
												<dl className='space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200'>
													<div className='sm:flex sm:px-6 sm:py-5'>
														<dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
															Location
														</dt>
														<dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6'>
															San Diego, CA, USA
														</dd>
													</div>
													<div className='sm:flex sm:px-6 sm:py-5'>
														<dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
															Email
														</dt>
														<dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6'>
															jared.dahlke@gmail.com
														</dd>
													</div>
												</dl>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
