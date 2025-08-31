import { createContext, useState, type ReactNode } from 'react'

interface TabsContextType {
	activeTab: string
	setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextType | null>(null)

function TabProvider({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
	const [activeTab, setActiveTab] = useState(defaultValue)
	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>
			<div className='flex flex-col'>{children}</div>
		</TabsContext.Provider>
	)
}

export { TabProvider, TabsContext }
