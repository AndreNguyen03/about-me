type SkillCard = {
	label: string
	percent: number
	subtitle?: string
}

function SkillCard({ label, percent, subtitle }: SkillCard) {
	return (
		<div className='flex flex-col gap-2 rounded-lg shadow-lg px-2 py-2'>
			<div className='flex items-center justify-between'>
				<span className='text-xs font-bold md:text-base'>{label}</span>
				<span className='text-xs md:text-base'>{percent}%</span>
			</div>
			<div className='h-2 w-full rounded-full bg-gray-200'>
				<div className='h-2 rounded-full bg-gray-800' style={{ width: `${percent}%` }}></div>
			</div>
			<span className='mt-2 w-fit rounded-md bg-slate-200 px-1 text-xs text-gray-800'>{subtitle}</span>
		</div>
	)
}

export { SkillCard }
