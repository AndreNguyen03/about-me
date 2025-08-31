import {
	CalendarIcon,
	EnvelopeIcon,
	FacebookIcon,
	LinkedinIcon,
	LocationIcon,
	RightArrowIcon,
	SwatchbookIcon
} from '../../icons'
import { Badge, Button } from '../../ui'
import { smoothScrollToId } from '../../utils/smoothScroll'

function Introduce() {
	return (
		<div className='ml-10 flex w-1/2 flex-col justify-center'>
			<span className='w-fit rounded-md bg-tag px-2 py-1 text-xs font-semibold text-green-700 shadow-lg'>
				<div className='mr-1 inline-block h-2 w-2 rounded-full bg-[#90E7B0]'></div>
				Available for freelance work
			</span>
			<p className='mt-4 text-4xl font-bold text-gray-900'>
				Hi, I'm <br /> Nguyen Nguyen Ngoc Anh
			</p>
			<p className='py-4 text-2xl font-semibold text-gray-700'>Frontend Developer</p>
			<p className='text-base text-gray-600'>
				I create beautiful, functional, and user-centered digital experiences. With 2+ years of experience in
				web development. I bring ideas to life through clean code and thoughtful design!
			</p>
			<div className='flex gap-4 py-4'>
				<Badge>
					<LocationIcon />
					HCMC, Vietnam
				</Badge>
				<Badge>
					<CalendarIcon />
					Available Now
				</Badge>
			</div>
			<div className='flex gap-4'>
				<Button
					variant='primary'
					onClick={() => {
						smoothScrollToId('projects', 1000, 20)
					}}
				>
					<SwatchbookIcon />
					View Projects
					<RightArrowIcon />
				</Button>
				<Button
					variant='secondary'
					onClick={() => {
						smoothScrollToId('contact', 1000, 20)
					}}
				>
					<EnvelopeIcon />
					Let's Work Together
				</Button>
			</div>
			<div className='mt-6 flex items-center gap-2'>
				<p className='text-sm font-semibold text-slate-700'>Follow me: </p>
				<a
					href='https://www.linkedin.com/in/anh-nguy%E1%BB%85n-nguy%C3%AAn-ng%E1%BB%8Dc-706a4125a/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<LinkedinIcon />
				</a>
				<a href=''>
					<FacebookIcon />
				</a>
			</div>
		</div>
	)
}

export { Introduce }
