import type { ReactNode } from 'react'

function PageHeader({ children }: { children: ReactNode }) {
	return <div className='w-full py-8'>{children}</div>
}

export { PageHeader }
