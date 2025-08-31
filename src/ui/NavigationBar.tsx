import { CodeIcon, EnvelopeIcon, FolderIcon, HouseIcon, LaptopIcon, UsercardIcon } from '../icons'
import { smoothScrollToId } from '../utils/smoothScroll'

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
	console.log(tracking)
	return (
		<div className='fixed left-0 top-0 z-50 w-full bg-white shadow'>
			<nav className='absolute left-1/2 top-4 z-10 flex w-[50rem] -translate-x-1/2 items-center justify-around rounded-full border bg-white px-2 py-2 shadow-xl'>
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
			</nav>
		</div>
	)
}

export { NavigationBar }
