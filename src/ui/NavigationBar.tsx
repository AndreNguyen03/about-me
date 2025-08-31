import { CodeIcon, EnvelopeIcon, FolderIcon, HouseIcon, LaptopIcon, UsercardIcon } from '../icons'

function NavigationBar() {
	return (
		<nav className='fixed left-0 top-0 z-50 w-full bg-white shadow'>
			<ul className='absolute left-1/2 top-4 z-10 flex w-[50rem] -translate-x-1/2 items-center justify-around rounded-full border bg-white px-2 py-2 shadow-xl'>
				<li className='flex items-center gap-1 rounded-full bg-nav px-3 py-2 text-sm font-semibold text-white'>
					<HouseIcon />
					Home
				</li>
				<li className='flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold'>
					<UsercardIcon />
					About
				</li>
				<li className='flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold'>
					<LaptopIcon />
					Experience
				</li>
				<li className='flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold'>
					<FolderIcon />
					Projects
				</li>
				<li className='flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold'>
					<CodeIcon />
					Skills
				</li>
				<li className='flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold'>
					<EnvelopeIcon />
					Contact
				</li>
			</ul>
		</nav>
	)
}

export { NavigationBar }
