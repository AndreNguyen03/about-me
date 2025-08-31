type SkillCard = {
	label: string
	percent: number
	subtitle?: string
}

function SkillCard() {
	return (
		<div className='flex flex-col gap-2 shadow-lg rounded-lg px-4 py-4'>
			<div className='flex items-center justify-between'>
				<span className="font-bold">JavaScript</span>
				<span>90%</span>
			</div>
			<div className='h-2 w-full rounded-full bg-gray-200'>
                <div className="bg-gray-800 h-2 rounded-full" style={{width: `90%`}}></div>
            </div>
            <span className="mt-2 w-fit text-xs text-gray-800 px-1 rounded-md bg-slate-200">Language</span>
		</div>
	)
}

export { SkillCard }
