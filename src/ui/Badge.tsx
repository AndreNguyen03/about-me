import type { ReactNode } from 'react'

function Badge({ children }: { children: ReactNode }) {
	return (
		<p className='flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-sm font-medium text-slate-500 shadow-md'>
			{children}
		</p>
	)
}

export { Badge }
