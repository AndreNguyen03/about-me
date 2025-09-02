import type { ReactNode } from 'react'
import { useViewportAnimation } from '../hooks'

function PageHeader({ children }: { children: ReactNode }) {
	const fadeDown = useViewportAnimation({
		animationClass: 'animate-fadeInRight lg:animate-fadeInDown'
	})
	return <div ref={fadeDown.ref}>{fadeDown.isVisible && <div className='w-full py-8'>{children}</div>}</div>
}

export { PageHeader }
