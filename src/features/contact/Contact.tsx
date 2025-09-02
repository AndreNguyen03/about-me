import { useEffect } from 'react'
import { PageLayout } from '../../ui'
import emailjs from '@emailjs/browser'
import { ContactForm, ConnectWithMe } from './'

function Contact() {
	useEffect(() => {
		emailjs.init({
			publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			blockHeadless: true,
			limitRate: {
				id: 'app',
				throttle: 10000
			}
		})
	}, [])

	return (
		<>
			<PageLayout id='contact' title='Get In Touch' description='something amazing together'>
				<div className='flex w-full flex-col items-center justify-around gap-6 px-4 py-6 md:flex-row md:items-start md:gap-8 md:px-8'>
					<ConnectWithMe />
					<ContactForm />
				</div>
			</PageLayout>
		</>
	)
}

export { Contact }
