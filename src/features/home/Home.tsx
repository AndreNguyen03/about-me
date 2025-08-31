import { PageLayout } from '../../ui'
import { Avatar } from './Avatar'
import { Introduce } from './Introduce'

function Home() {
	return (
		<PageLayout>
			<Introduce />
			<Avatar src='/anh.jpg' />
		</PageLayout>
	)
}

export { Home }
