import type { ReactNode } from 'react'

function TabList({ children }: { children: ReactNode }) {
	return <div className='flex w-full justify-center space-x-1 rounded-lg shadow-lg'>{children}</div>
}

export { TabList }
