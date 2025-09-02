import { CalendarIcon, CodeIcon, GlobeIcon, StarIcon } from '../../icons'
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
	}
}

type ProjectCardProps = {
	project: ProjectType
}

function ProjectCard({ project }: ProjectCardProps) {
	const visibleTech = project.tech.slice(0, 3)
	const hiddenTech = project.tech.slice(3)
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

			{/* Tech Tags */}
			<div className='group relative flex flex-wrap items-center gap-2'>
				{visibleTech.map((t) => (
					<span key={t} className='rounded-md bg-[#1F2938] px-2 text-sm font-semibold text-white'>
						{t}
					</span>
				))}

				{hiddenTech.length > 0 && (
					<div className='relative'>
						<span className='cursor-pointer rounded-md bg-slate-400 px-2 text-sm'>
							+{hiddenTech.length}
						</span>

						{/* Hidden tags tooltip */}
						<div className='invisible absolute -top-20 left-full z-10 mt-1 whitespace-nowrap rounded-md bg-transparent opacity-0 transition-opacity group-hover:visible group-hover:opacity-100'>
							{hiddenTech.map((t) => (
								<span
									key={t}
									className='my-2 block rounded-md bg-[#1F2938] px-2 py-1 text-sm font-semibold text-white'
								>
									{t}
								</span>
							))}
						</div>
					</div>
				)}
			</div>

			<div className='flex gap-2'>
				<Button
					className='flex-1 justify-center'
					onClick={() => {
						window.open(project.links.code, '_blank')
					}}
				>
					<CodeIcon /> Code
				</Button>
			</div>
		</div>
	)
}

export { ProjectCard }
