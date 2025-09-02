import { createContext, useState, type ReactNode } from 'react'
import { useViewportAnimation } from '../hooks';

interface TabsContextType {
	activeTab: string
	setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextType | null>(null)

function TabProvider({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
	const [activeTab, setActiveTab] = useState(defaultValue)
    const {ref, isVisible} = useViewportAnimation({animationClass: 'animate-fadeInLeft lg:animate-fadeInDown'})
	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>
			<div ref={ref} className='flex flex-col'>{isVisible && children}</div>
		</TabsContext.Provider>
	)
}

export { TabProvider, TabsContext }
