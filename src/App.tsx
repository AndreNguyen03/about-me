import { About } from './features/about'
import { Contact } from './features/contact'
import { Experience } from './features/experience'
import { Home } from './features/home'
import { Project } from './features/projects'
import { Skill } from './features/skills'
import { Footer, NavigationBar } from './ui'

function App() {
	return (
		<div className='relative select-none'>
			<NavigationBar />
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
