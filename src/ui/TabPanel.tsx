import type { ReactNode } from 'react'
import { useTabs } from '../hooks'

function TabPanel({ value, children, className }: { className?: string; value: string; children: ReactNode }) {
	const { activeTab } = useTabs()

	if (activeTab !== value) return null

	return <div className={`md:px-4 md:py-4 flex flex-col gap-4 ${className}`}>{children}</div>
}

export { TabPanel }
