import { HeaderDescription, HeaderTitle, PageHeader, PageLayout } from '../../ui'
import { Avatar } from '../home'
import { ProfileDetail } from './ProfileDetail'

function About() {
	return (
		<>
			<PageHeader>
				<HeaderTitle>About</HeaderTitle>
				<HeaderDescription>
					Passionate about creating innovative solutions through technology.
				</HeaderDescription>
			</PageHeader>
			<PageLayout>
				<div className='flex h-full w-full'>
					<Avatar src='/anh.jpg' />
					<ProfileDetail />
				</div>
			</PageLayout>
		</>
	)
}

export { About }
