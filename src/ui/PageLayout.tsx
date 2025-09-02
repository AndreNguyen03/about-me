import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { HeaderTitle } from './HeaderTitle'
import { HeaderDescription } from './HeaderDescription'

function PageLayout({
	id,
	children,
	title,
	description
}: {
	id: string
	title?: string
	description?: string
	children: ReactNode
}) {
	return (
		<>
			<section id={id} className='flex h-auto min-h-screen w-full flex-col items-center justify-center px-4 py-4 md:py-2'>
				{title && description && (
					<PageHeader>
						<HeaderTitle>{title}</HeaderTitle>
						<HeaderDescription>{description}</HeaderDescription>
					</PageHeader>
				)}
				<div className='flex h-fit w-full max-w-[70rem] flex-col items-center md:flex-row gap-4'>
					{children}
				</div>
			</section>
		</>
	)
}

export { PageLayout }
