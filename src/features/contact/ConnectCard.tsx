import { LinkedinIcon } from "../../icons"

function ConnectCard() {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex gap-2 rounded-lg px-6 py-6 shadow-lg'>
				<LinkedinIcon />
				<div className='flex flex-col'>
					<p className='text-sm font-bold'>
						Linkedin <span className='font-normal text-slate-400'>@AndreNguyen03</span>
					</p>
					<p className='text-sm text-slate-500'>Connect with me professionally and see my career journey</p>
				</div>
			</div>
		</div>
	)
}

export { ConnectCard }
