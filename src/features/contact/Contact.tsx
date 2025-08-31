import { EnvelopeIcon, FacebookIconv2, GithubIcon, LinkedinIconv2, MessageIcon } from '../../icons'
import { Button, PageLayout } from '../../ui'
import { ConnectCard } from './ConnectCard'

const socials = [
	{
		icon: <LinkedinIconv2 />,
		label: 'LinkedIn',
		desc: 'Connect with me professionally and see my career journey'
	},
	{
		icon: <GithubIcon />,
		label: 'GitHub',
		desc: 'Check out my latest projects and open source contributions'
	},
	{
		icon: <FacebookIconv2 />,
		label: 'Facebook',
		desc: 'Behind the scenes of my development journey'
	}
]

function Contact() {
	return (
		<>
			<PageLayout id='contact' title='Get In Touch' description='something amazing together'>
				<div className='flex items-start justify-around gap-4 px-4 py-4'>
					<div className='space-y-2 px-4 py-4'>
						<span className='flex items-center gap-2 text-xl font-bold'>
							<MessageIcon />
							Connect With Me
						</span>
						<p>
							Follow me on social media to stay updated with my latest status, projects, tech insights,
							and development journey. Let's cconnect and build something great together!
						</p>
						{socials.map((item) => {
                            return (
                                <ConnectCard desc={item.desc} icon={item.icon} label={item.label} key={item.label}/>
                            )
                        })}
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
