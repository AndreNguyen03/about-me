import type { ReactElement, ReactNode } from 'react'
import { useTabs } from '../hooks'

function Tab({ value, icon, children }: { value: string; icon?: ReactElement; children: ReactNode }) {
	const { activeTab, setActiveTab } = useTabs()

	const isActive = activeTab === value

	return (
		<button
			className={`flex flex-1 items-center justify-center gap-1 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-150 ${isActive ? 'bg-[#1F2938] text-white' : 'bg-[#F2F4F5] text-black hover:opacity-80'}`}
			onClick={() => setActiveTab(value)}
		>
			{icon}
			{children}
		</button>
	)
}

export { Tab }
