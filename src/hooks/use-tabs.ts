import { useContext } from 'react'
import { TabsContext } from '../contexts'

function useTabs() {
	const context = useContext(TabsContext)
	if (!context) throw new Error('Tab must be used inside Tabs')
	return context
}

export { useTabs }
