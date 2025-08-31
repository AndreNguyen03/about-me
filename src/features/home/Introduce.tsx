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
				<Button variant='primary'>
					<SwatchbookIcon />
					View Projects
					<RightArrowIcon />
				</Button>
				<Button variant='secondary'>
					<EnvelopeIcon />
					Let's Work Together
				</Button>
			</div>
			<div className='mt-6 flex items-center gap-2'>
				<p className='text-sm font-semibold text-slate-700'>Follow me: </p>
				<LinkedinIcon />
				<FacebookIcon />
			</div>
		</div>
	)
}

export { Introduce }
