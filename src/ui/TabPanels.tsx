import type { ReactNode } from 'react'

function TabPanels({ children, border = true }: { border?: boolean; children: ReactNode }) {
	return (
		<div className={`relative mt-4 px-2 py-2 ${border ? 'border-l-4 border-black' : ''}`}>
			{border && <div className='absolute -left-2 top-0 h-3 w-3 rounded-full bg-black'></div>}
			{children}
		</div>
	)
}

export { TabPanels }
