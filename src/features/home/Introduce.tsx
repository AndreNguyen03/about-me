import {
	CalendarIcon,
	EnvelopeIcon,
	FacebookIcon,
	LinkedinIcon,
	LocationIcon,
	RightArrowIcon,
	SwatchbookIcon
} from '../../icons'
import { Badge, Button, TypingText } from '../../ui'
import { smoothScrollToId } from '../../utils/smoothScroll'

function Introduce() {
	return (
		<div className='flex w-full flex-col justify-center md:w-1/2'>
			<span className='w-fit rounded-md bg-tag px-2 py-1 text-xs font-semibold text-green-700 shadow-lg'>
				<div className='mr-1 inline-block h-2 w-2 rounded-full bg-[#90E7B0]'></div>
				Available for freelance work
			</span>
			<p className='mt-4 text-4xl font-bold text-gray-900'>
				Hi, I'm <br /> Nguyen Nguyen Ngoc Anh
			</p>
			<TypingText
				texts={['Frontend Developer', 'Backend Developer', 'Software Developer']}
				className='py-4 text-2xl font-semibold text-gray-700'
			/>
			<p className='text-base text-gray-600'>
				I build innovative, efficient, and user-friendly software solutions. As a Software Engineering student
				at UIT, with hands-on experience in projects like AI-powered VSCode extensions and clinic management
				systems, I transform ideas into reality with clean code and modern technologies!
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
					className='flex-1 sm:flex-none'
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
					className='flex-1 sm:flex-none'
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
				<a href='https://www.facebook.com/ngoc.nguyen.816796' target='_blank' rel='noopener noreferrer'>
					<FacebookIcon />
				</a>
			</div>
		</div>
	)
}

export { Introduce }
