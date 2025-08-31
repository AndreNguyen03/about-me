import { HeaderDescription, HeaderTitle, PageHeader, PageLayout } from '../../ui'
import { ProjectCard } from './ProjectCard'

function Project() {
	return (
		<>
			<PageHeader>
				<HeaderTitle>My Projects</HeaderTitle>
				<HeaderDescription>A show case of my development work</HeaderDescription>
			</PageHeader>
			<PageLayout>
				<div className='flex h-fit w-full items-center justify-center gap-4 rounded-lg border-t-2 border-slate-200 px-8 py-8 shadow-xl'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</PageLayout>
		</>
	)
}

export { Project }
