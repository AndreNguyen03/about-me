import { PageLayout } from '../../ui'
import { Avatar } from './Avatar'
import { Introduce } from './Introduce'

function Home() {
	return (
		<PageLayout id='home'>
			<Introduce />
			<Avatar src='/anh1.jpg' />
		</PageLayout>
	)
}

export { Home }
