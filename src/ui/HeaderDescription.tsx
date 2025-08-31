import type { ReactNode } from 'react'

function HeaderDescription({ children }: { children: ReactNode }) {
	return <p className='py-2 text-center'>{children}</p>
}

export { HeaderDescription }
