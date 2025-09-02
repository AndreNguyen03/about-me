import type { ReactElement } from 'react'

function ConnectCard({ icon, label, desc, link }: { link: string; icon: ReactElement; label: string; desc: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex gap-2 rounded-lg px-6 py-6 shadow-lg'>
				{icon}
				<div className='flex flex-col'>
					<a className='text-sm font-bold hover:underline' href={link} target='_blank' rel='noopener noreferrer'>
						{label} <span className='font-normal text-slate-400'>@AndreNguyen03</span>
					</a>
					<p className='text-sm text-slate-500'>{desc}</p>
				</div>
			</div>
		</div>
	)
}

export { ConnectCard }
