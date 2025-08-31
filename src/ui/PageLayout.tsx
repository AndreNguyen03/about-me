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
			<section id={id} className='flex h-screen w-full flex-col items-center justify-center'>
				{title && description && (
					<PageHeader>
						<HeaderTitle>{title}</HeaderTitle>
						<HeaderDescription>{description}</HeaderDescription>
					</PageHeader>
				)}
				<div className='flex h-fit w-[70rem] items-center'>{children}</div>
			</section>
		</>
	)
}

export { PageLayout }
