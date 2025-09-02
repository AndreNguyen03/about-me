import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '../icons'
import { smoothScrollToId } from '../utils/smoothScroll'

const BackToTopButton = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 100) // Show button after scrolling 100px
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		smoothScrollToId('home')
	}

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-6 right-6 z-50 rounded-full bg-black p-3shadow-lg transition-opacity duration-300 px-3 py-3 ${
				visible ? 'opacity-100' : 'pointer-events-none opacity-0'
			}`}
		>
			<ArrowUpIcon size='20' />
		</button>
	)
}

export { BackToTopButton }
