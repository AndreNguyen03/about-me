import {
	BriefcaseIcon,
	CalendarIcon,
	CodeIcon,
	EnvelopeIcon,
	FacebookIconv2,
	FolderIcon,
	GithubIcon,
	HouseIcon,
	LinkedinIconv2,
	MessageIcon,
	UsercardIcon
} from '../icons'
import { smoothScrollToId } from '../utils/smoothScroll'
import { Button } from './Button'

const menuItems = [
	{ icon: <HouseIcon />, label: 'Home' },
	{ icon: <UsercardIcon />, label: 'About' },
	{ icon: <BriefcaseIcon />, label: 'Experience' },
	{ icon: <FolderIcon />, label: 'Projects' },
	{ icon: <CodeIcon />, label: 'Skills' },
	{ icon: <EnvelopeIcon />, label: 'Contact' }
]

function Footer() {
	return (
		<div className='flex h-fit w-full flex-col gap-6 border-t-2 px-6 py-10 md:px-12 lg:px-28 lg:py-20'>
			<div className='flex flex-col items-start justify-between gap-8 border-b-2 border-slate-300 pb-10 md:flex-row md:flex-wrap'>
				<div className='flex w-full flex-col gap-2 md:w-64'>
					<span className='text-lg font-semibold'>Portfolio</span>
					<p className='text-sm'>
						Passionate developer creating innovative solutions and beautiful experiences. Let's build
						something amazing together
					</p>
					<div className='flex items-center gap-4'>
						<a
							href='https://www.linkedin.com/in/anh-nguy%E1%BB%85n-nguy%C3%AAn-ng%E1%BB%8Dc-706a4125a/'
							target='_blank'
							rel='noopen noreferrer'
						>
							<LinkedinIconv2 />
						</a>
						<a href='https://www.facebook.com/ngoc.nguyen.816796' target='_blank' rel='noopen noreferrer'>
							<FacebookIconv2 />
						</a>
						<a href='https://github.com/AndreNguyen03' rel='noopener noreferrer' target='_blank'>
							<GithubIcon />
						</a>
					</div>
				</div>
				<div className='flex w-full flex-col gap-2 sm:w-1/2 md:w-64'>
					<span className='text-lg font-semibold'>Quick Links</span>
					<div className='grid grid-cols-2 gap-4'>
						{menuItems.map((item) => {
							return (
								<a
									href={`#${item.label.toLowerCase()}`}
									className='flex items-center gap-2 text-sm'
									key={item.label}
								>
									{item.icon}
									{item.label}
								</a>
							)
						})}
					</div>
				</div>
				<div className='flex w-full flex-col gap-2 md:w-64'>
					<span className='text-lg font-semibold'>Get In Touch</span>
					<span className='flex items-center gap-2 text-sm'>
						<EnvelopeIcon /> ngocanh030110@gmail.com
					</span>
					<span className='flex items-center gap-2 text-sm'>
						<MessageIcon /> Available for freelance work
					</span>
					<Button className='mt-2 w-fit' onClick={() => smoothScrollToId('contact', 1000, 20)}>
						Let's Work Together <EnvelopeIcon />
					</Button>
				</div>
				<div className='flex w-full flex-col gap-2 sm:w-1/2 md:w-64'>
					<span className='text-lg font-semibold'>Stay Updated</span>
					<p className='text-sm'>Subcribe to get notified about my latest projects and articles.</p>
					<Button className='justify-center'>Subcribe Now</Button>
				</div>
			</div>
			<div className='flex flex-col items-center justify-between gap-4 py-2 text-sm italic text-slate-600 md:flex-row'>
				<span>© 2025 Portfolio. Made with ❤️ and lots of coffee</span>
				<span className='flex items-center gap-2'>
					<CalendarIcon />
					HCMC, 31 August 2025
				</span>
			</div>
		</div>
	)
}

export { Footer }
