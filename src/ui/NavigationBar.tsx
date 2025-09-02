import { useState } from 'react'
import {
	CloseSidebarIcon,
	CodeIcon,
	EnvelopeIcon,
	FolderIcon,
	HouseIcon,
	LaptopIcon,
	MenuIcon,
	UsercardIcon
} from '../icons'
import { smoothScrollToId } from '../utils/smoothScroll'
import OpenSidebarIcon from '../icons/OpenSidebarIcon'
import { useViewportAnimation } from '../hooks'

const sections = [
	{
		icon: <HouseIcon />,
		label: 'Home'
	},
	{
		icon: <UsercardIcon />,
		label: 'About'
	},
	{
		icon: <LaptopIcon />,
		label: 'Experience'
	},
	{
		icon: <FolderIcon />,
		label: 'Projects'
	},
	{
		icon: <CodeIcon />,
		label: 'Skills'
	},
	{
		icon: <EnvelopeIcon />,
		label: 'Contact'
	}
]

function NavigationBar({ tracking }: { tracking: string }) {
	const [isOpen, setIsOpen] = useState(false)
	const fadeDown = useViewportAnimation({ animationClass: 'animate-fadeInDown' })
	return (
		<nav ref={fadeDown.ref} className='fixed left-0 top-0 z-50 flex w-full items-center justify-between p-4'>
			<div className='absolute left-1/2 top-4 z-10 hidden w-[50rem] -translate-x-1/2 items-center justify-around rounded-full border bg-white px-2 py-2 shadow-xl md:flex'>
				{sections.map((item) => {
					return (
						<button
							key={item.label}
							className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 ${tracking === item.label.toLowerCase() ? 'bg-nav text-white' : ''}`}
							onClick={() => {
								smoothScrollToId(item.label.toLowerCase(), 1000, 20)
							}}
						>
							{item.icon}
							{item.label}
						</button>
					)
				})}
			</div>
			<button
				className='ml-auto rounded-md bg-white px-2 py-2 shadow-lg md:hidden'
				onClick={() => setIsOpen(true)}
			>
				<OpenSidebarIcon size='20' />
			</button>
			<div
				className={`fixed right-0 top-0 h-full w-1/2 transform bg-white shadow-lg transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
			>
				<div className='flex items-center justify-between border-b bg-white p-4'>
					<span className='flex items-center gap-2 font-bold'>
						<MenuIcon size={18} /> Navigation
					</span>
					<button onClick={() => setIsOpen(false)} className='rounded-md bg-white px-2 py-2 shadow-lg'>
						<CloseSidebarIcon size='20' />
					</button>
				</div>

				<div className='flex flex-col space-y-4 bg-white p-4'>
					{sections.map((item) => {
						return (
							<button
								key={item.label}
								className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 ${tracking === item.label.toLowerCase() ? 'bg-nav text-white' : ''}`}
								onClick={() => {
									smoothScrollToId(item.label.toLowerCase(), 1000, 20)
								}}
							>
								{item.icon}
								{item.label}
							</button>
						)
					})}
				</div>
			</div>
		</nav>
	)
}

export { NavigationBar }
