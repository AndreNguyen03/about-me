import { useEffect, useRef, useState } from 'react'
import { About } from './features/about'
import { Contact } from './features/contact'
import { Experience } from './features/experience'
import { Home } from './features/home'
import { Project } from './features/projects'
import { Skill } from './features/skills'
import { Footer, NavigationBar } from './ui'

const sections = ['home', 'about', 'projects', 'contact', 'skills', 'experience']

function App() {
	const [active, setActive] = useState('home')
	const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id) // đổi active khi section hiện
					}
				})
			},
			{ threshold: 0.5 } // 50% section trong viewport thì active
		)

		sections.forEach((id) => {
			const el = document.getElementById(id)
			if (el) {
				sectionRefs.current[id] = el
				observer.observe(el)
			}
		})

		return () => observer.disconnect()
	}, [])
	return (
		<div className='relative select-none'>
			<NavigationBar tracking={active} />
			<Home />
			<About />
			<Experience />
			<Project />
			<Skill />
			<Contact />
			<Footer />
		</div>
	)
}

export { App }
