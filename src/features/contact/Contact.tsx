import { EnvelopeIcon } from '../../icons'
import { Button, HeaderDescription, HeaderTitle, PageHeader, PageLayout } from '../../ui'
import { ConnectCard } from './ConnectCard'

function Contact() {
	return (
		<>
			<PageHeader>
				<HeaderTitle>Get In Touch</HeaderTitle>
				<HeaderDescription>something amazing together</HeaderDescription>
			</PageHeader>
			<PageLayout>
				<div className='flex items-start justify-around gap-4 px-4 py-4'>
					<div className='space-y-2 px-4 py-4'>
						<span className='flex items-center gap-2 text-xl font-bold'>
							<EnvelopeIcon />
							Connect With Me
						</span>
						<p>
							Follow me on social media to stay updated with my latest status, projects, tech insights,
							and development journey. Let's cconnect and build something great together!
						</p>
						<ConnectCard />
						<ConnectCard />
						<ConnectCard />
						<ConnectCard />
					</div>
					<div className='space-y-2 px-4 py-4'>
						<span className='flex items-center gap-2 text-xl font-bold'>
							<EnvelopeIcon />
							Contact Form
						</span>
						<p>Have a project in mind? Send me a message and I'll get back to you as soon as possible!</p>
						<form className='flex flex-col gap-1 rounded-xl px-4 py-4 shadow-xl'>
							<span className='flex items-center gap-2 font-bold'>
								<EnvelopeIcon />
								Send Me a Message
							</span>
							<div className='flex items-center gap-2'>
								<div className='flex flex-col gap-2'>
									<label>Name *</label>
									<input type='text' name='customer' required className='input grow' />
								</div>
								<div className='flex flex-col gap-2'>
									<label>Email *</label>
									<input type='text' name='customer' required className='input grow' />
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<label>Subject *</label>
								<input type='text' name='customer' required className='input grow' />
							</div>
							<div className='flex flex-col gap-2'>
								<label>Message *</label>
								<input type='text' name='customer' required className='input grow' />
							</div>
							<Button className='mt-4 justify-center gap-2'>Send Message</Button>
						</form>
					</div>
				</div>
			</PageLayout>
		</>
	)
}

export { Contact }
