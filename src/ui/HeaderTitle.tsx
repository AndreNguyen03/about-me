import type { ReactNode } from 'react'

function HeaderTitle({ children }: { children: ReactNode }) {
	return <p className='text-center text-4xl font-bold'>{children}</p>
}

export { HeaderTitle }
