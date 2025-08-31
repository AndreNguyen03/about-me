import { CalendarIcon, CodeIcon, ForwardIcon, GlobeIcon, StarIcon } from '../../icons'
import { Button } from '../../ui'

export type ProjectType = {
	title: string
	type: string
	status: 'Completed' | 'In Progress' | 'Planned'
	featured: boolean
	description: string
	period: string
	tech: string[]
	links: {
		code: string
		demo: string
	}
}

type ProjectCardProps = {
	project: ProjectType
}

function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className='flex flex-1 flex-col gap-2 rounded-lg bg-slate-100 px-4 py-4 shadow-lg'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<GlobeIcon />
					{project.featured && (
						<span className='flex items-center gap-1 rounded-lg bg-yellow-100 px-1 text-sm text-yellow-600'>
							<StarIcon /> Featured
						</span>
					)}
				</div>
				<span className='rounded-lg bg-green-300 px-1 text-sm text-green-800'>{project.status}</span>
			</div>

			<p className='text-lg font-bold'>{project.title}</p>
			<p className='text-sm'>{project.type}</p>
			<p className='py-2 text-sm'>{project.description}</p>

			<span className='flex items-center gap-1 text-sm'>
				<CalendarIcon />
				{project.period}
			</span>

			<div className='flex flex-wrap items-center gap-2'>
				{project.tech.slice(0, 3).map((t) => (
					<span key={t} className='rounded-md bg-[#1F2938] px-2 text-sm font-semibold text-white'>
						{t}
					</span>
				))}
				{project.tech.length > 3 && (
					<span className='rounded-md bg-slate-400 px-2 text-sm'>+{project.tech.length - 3}</span>
				)}
			</div>

			<div className='flex gap-2'>
				<Button className='flex-1 justify-center'>
					<CodeIcon /> Code
				</Button>
				<Button className='flex-1 justify-center' variant='secondary'>
					<ForwardIcon /> Demo
				</Button>
			</div>
		</div>
	)
}

export { ProjectCard }
