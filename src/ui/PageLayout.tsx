import type { ReactNode } from 'react'

function PageLayout({ children }: { children: ReactNode }) {
	return (
		<div className='flex h-screen w-full items-center justify-center flex-col'>
			<div className='flex h-fit w-[62rem] items-center'>{children}</div>
		</div>
	)
}

export { PageLayout }
