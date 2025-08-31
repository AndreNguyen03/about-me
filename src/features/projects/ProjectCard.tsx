import { CalendarIcon, CodeIcon, ForwardIcon, GlobeIcon, StarIcon } from '../../icons'
import { Button } from '../../ui'

function ProjectCard() {
	return (
		<div className='flex flex-1 flex-col gap-2 rounded-lg bg-slate-100 px-4 py-4 shadow-lg'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<GlobeIcon />
					<span className='flex items-center gap-1 rounded-lg bg-yellow-100 px-1 text-sm text-yellow-600'>
						<StarIcon /> Featured
					</span>
				</div>
				<span className='rounded-lg bg-green-300 px-1 text-sm text-green-800'>Completed</span>
			</div>
			<p className='text-lg font-bold'>E-Commerce Platform</p>
			<p className='text-sm'>Full Stack Web Application</p>
			<p className='py-2 text-sm'>
				Modern e-commerce platform built with React and Node. Features include user authentication, product
				catalog, shopping cart, payment integration and admin dashboard.
			</p>
			<span className='flex items-center gap-1 text-sm'>
				<CalendarIcon />
				May 2025 - Jun 2025
			</span>
			<div className='flex items-center gap-2 flex-wrap'>
				<span className='rounded-md bg-[#1F2938] px-2 text-sm font-semibold text-white'>React</span>
				<span className='rounded-md bg-[#1F2938] px-2 text-sm font-semibold text-white'>Node</span>
				<span className='rounded-md bg-[#1F2938] px-2 text-sm font-semibold text-white'>MongoDB</span>
				<span className='rounded-md bg-slate-400 px-2 text-sm'>+2</span>
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
