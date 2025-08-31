import { CalendarIcon, GraduateIcon, LocationIcon } from '../../icons'

function ExperienceCard() {
	return (
		<div className='flex flex-col rounded-lg px-3 shadow-lg'>
			<div className='flex justify-between'>
				<div className='flex flex-col gap-1'>
					<span className='text-xl font-bold'>Bachelor of Software Engineer</span>
					<span className='flex items-center gap-2'>
						<GraduateIcon /> University of Infomation Technology, VNU-HCM
					</span>
					<span>GPA: 8.6/10.0</span>
				</div>
				<div className='flex flex-col gap-1 items-end'>
					<span className='flex items-center gap-1 w-fit'>
						<CalendarIcon /> 2022- Present
					</span>
					<span className='flex items-center justify-between gap-2'>
						<LocationIcon />
						HCMC, Vietnam
					</span>
				</div>
			</div>
			<span className='py-3'>
				Currently pursuing degree in Software Engineering with focus on design and develope highload system, etc...
			</span>
			<div className='space-x-2 pb-4'>
				<span className='rounded-full bg-[#1F2938] px-3 py-1 font-semibold text-white'>Data Structures</span>
				<span className='rounded-full bg-[#1F2938] px-3 py-1 font-semibold text-white'>Web Programming</span>
				<span className='rounded-full bg-[#1F2938] px-3 py-1 font-semibold text-white'>
					Software Engineering
				</span>
				<span className='rounded-full bg-[#1F2938] px-3 py-1 font-semibold text-white'>
					Object Oriented Programming
				</span>
			</div>
		</div>
	)
}

export { ExperienceCard }
