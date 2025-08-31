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
		<div className='flex h-fit w-full flex-col gap-2 border-t-2 px-28 py-20'>
			<div className='flex items-start justify-between gap-2 border-b-2 border-slate-300 pb-10'>
				<div className='flex w-64 flex-col gap-2'>
					<span className='text-lg font-semibold'>Portfolio</span>
					<p className='text-sm'>
						Passionate developer creating innovative solutions and beautiful experiences. Let's build
						something amazing together
					</p>
					<div className='flex items-center gap-4'>
						<LinkedinIconv2 />
						<FacebookIconv2 />
						<GithubIcon />
					</div>
				</div>
				<div className='flex w-64 flex-col gap-2'>
					<span className='text-lg font-semibold'>Quick Links</span>
					<div className='grid grid-cols-2 gap-4'>
						{menuItems.map((item) => {
							return (
								<span className='flex items-center gap-2 text-sm' key={item.label}>
									{item.icon}
									{item.label}
								</span>
							)
						})}
					</div>
				</div>
				<div className='flex w-64 flex-col gap-2'>
					<span className='text-lg font-semibold'>Get In Touch</span>
					<span className='flex items-center gap-2 text-sm'>
						<EnvelopeIcon /> ngocanh030110@gmail.com
					</span>
					<span className='flex items-center gap-2 text-sm'>
						<MessageIcon /> Available for freelance work
					</span>
					<Button className='mt-2 w-fit'>
						Let's Work Together <EnvelopeIcon />
					</Button>
				</div>
				<div className='flex w-64 flex-col gap-2'>
					<span className='text-lg font-semibold'>Stay Updated</span>
					<p className='text-sm'>Subcribe to get notified about my latest projects and articles.</p>
					<Button className='justify-center'>Subcribe Now</Button>
				</div>
			</div>
			<div className='flex items-center justify-between py-2 italic text-slate-600'>
				<span>© 2025 Portfolio. Made with ❤️ and lots of coffee</span>
				<span className='flex items-center gap-2'>
					<CalendarIcon />
					HCMC, 31 August 2025
				</span>
			</div>
		</div>
		// © 2025 Portfolio. Made with ❤️ and lots of coffee  Selasa, 29 Juli 2025
	)
}

export { Footer }
