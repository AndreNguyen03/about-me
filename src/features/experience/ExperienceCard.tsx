import { CalendarIcon, GraduateIcon, LocationIcon } from '../../icons'

function ExperienceCard() {
	return (
		<div className='flex flex-col rounded-lg px-4 py-3 shadow-lg'>
			<div className='flex flex-col gap-4 md:flex-row md:justify-between'>
				<div className='flex flex-col gap-1'>
					<span className='text-lg font-bold md:text-xl'>Bachelor of Software Engineer</span>
					<span className='flex items-center gap-2 text-sm md:text-base'>
						<GraduateIcon /> University of Infomation Technology, VNU-HCM
					</span>
					<span className='text-sm md:text-base'>GPA: 8.6/10.0</span>
				</div>
				<div className='flex flex-col gap-1 text-sm md:items-end md:text-base'>
					<span className='flex w-fit items-center gap-1'>
						<CalendarIcon /> 2022 - Present
					</span>
					<span className='flex items-center gap-1'>
						<LocationIcon />
						HCMC, Vietnam
					</span>
				</div>
			</div>
			<span className='md:text-bases py-3 text-sm'>
				Currently pursuing degree in Software Engineering with focus on design and develope highload system,
				etc...
			</span>
			<div className='flex flex-wrap gap-2 pb-4'>
				<span className='rounded-full bg-[#1F2938] px-3 py-1 text-xs font-semibold text-white md:text-sm'>
					Data Structures
				</span>
				<span className='rounded-full bg-[#1F2938] px-3 py-1 text-xs font-semibold text-white md:text-sm'>
					Web Programming
				</span>
				<span className='rounded-full bg-[#1F2938] px-3 py-1 text-xs font-semibold text-white md:text-sm'>
					Software Engineering
				</span>
				<span className='rounded-full bg-[#1F2938] px-3 py-1 text-xs font-semibold text-white md:text-sm'>
					Object Oriented Programming
				</span>
			</div>
		</div>
	)
}

export { ExperienceCard }
