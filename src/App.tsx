import { About } from './features/about'
import { Contact } from './features/contact'
import { Experience } from './features/experience'
import { Home } from './features/home'
import { Project } from './features/projects'
import { Skill } from './features/skills'
import { BackToTopButton, Footer, NavigationBar } from './ui'
import { useScrollSpy } from './hooks'

const sections = ['home', 'about', 'projects', 'contact', 'skills', 'experience']

function App() {
	const active = useScrollSpy(sections, 20)
	return (
		<div className='relative select-none overflow-x-hidden'>
			<NavigationBar tracking={active} />
			<Home />
			<About />
			<Experience />
			<Project />
			<Skill />
			<Contact />
			<Footer />
			<BackToTopButton />
		</div>
	)
}

export { App }
