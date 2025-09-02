import type { ReactElement } from 'react'
import { Button } from '../../ui'

type ProfileInfoCardProps = {
	icon?: ReactElement
	title?: string
	detail?: string
}

function ProfileInfoCard({ icon, title, detail }: ProfileInfoCardProps) {
	return (
		<div className='flex items-center gap-2 rounded-lg px-1 py-1 shadow-xl transition-all duration-150 hover:outline-none hover:ring-2 hover:ring-slate-500 w-[14rem]'>
			<Button>{icon}</Button>
			<div>
				<p className='text-xs font-semibold text-slate-600'>{title}</p>
				<p className='text-xs font-semibold'>{detail}</p>
			</div>
		</div>
	)
}

export { ProfileInfoCard }
