import type { ReactElement } from 'react';

function ConnectCard({ icon, label, desc }: { icon: ReactElement; label: string; desc: string }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex gap-2 rounded-lg px-6 py-6 shadow-lg'>
				{icon}
				<div className='flex flex-col'>
					<p className='text-sm font-bold'>
						{label} <span className='font-normal text-slate-400'>@AndreNguyen03</span>
					</p>
					<p className='text-sm text-slate-500'>{desc}</p>
				</div>
			</div>
		</div>
	)
}

export { ConnectCard }
