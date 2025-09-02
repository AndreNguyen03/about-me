import { PageLayout } from '../../ui'
import { Avatar } from '../home'
import { ProfileDetail } from './ProfileDetail'

function About() {
	return (
		<>
			<PageLayout
				id='about'
				title='About'
				description='Passionate about creating innovative solutions through technology.'
			>
				<Avatar src='/anh2.jpg' />
				<ProfileDetail />
			</PageLayout>
		</>
	)
}

export { About }
