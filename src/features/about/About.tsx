import { PageLayout } from '../../ui'
import { Avatar } from '../home'
import { ProfileDetail } from './ProfileDetail'

function About() {
	return (
		<>
			<PageLayout id='about' title='About' description='Passionate about creating innovative solutions through technology.'>
				<div className='flex h-full w-full'>
					<Avatar src='/anh.jpg' />
					<ProfileDetail />
				</div>
			</PageLayout>
		</>
	)
}

export { About }
