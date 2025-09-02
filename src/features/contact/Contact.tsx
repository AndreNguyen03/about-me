import { useEffect, useState } from 'react'
import { EnvelopeIcon, FacebookIconv2, GithubIcon, LinkedinIconv2, MessageIcon } from '../../icons'
import { Button, PageLayout } from '../../ui'
import { ConnectCard } from './ConnectCard'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from '../../helpers'

const socials = [
	{
		icon: <LinkedinIconv2 />,
		link: 'https://www.linkedin.com/in/anh-nguy%E1%BB%85n-nguy%C3%AAn-ng%E1%BB%8Dc-706a4125a/',
		label: 'LinkedIn',
		desc: 'Connect with me professionally and see my career journey'
	},
	{
		icon: <GithubIcon />,
		link: 'https://github.com/AndreNguyen03',
		label: 'GitHub',
		desc: 'Check out my latest projects and open source contributions'
	},
	{
		icon: <FacebookIconv2 />,
		link: 'https://www.facebook.com/ngoc.nguyen.816796',
		label: 'Facebook',
		desc: 'Behind the scenes of my development journey'
	}
]

type FormData = {
	customer: string
	email: string
	subject: string
	message: string
}

function Contact() {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState<string | null>(null)

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({ resolver: yupResolver(formSchema) })

	useEffect(() => {
		emailjs.init({
			publicKey: 'AXniuuF3GbSpe3VNB',
			blockHeadless: true,
			limitRate: {
				id: 'app',
				throttle: 10000
			}
		})
	}, [])

	const sendEmail = handleSubmit(async (data: FormData) => {
		setLoading(true)
		setSuccess(null)
		try {
			await emailjs.send(
				'service_3kfn3vh', // your service ID
				'template_zm6k74n', // your template ID
				data // form data object
			)
			setSuccess('Message sent successfully!')
			reset()
		} catch (err) {
			console.error(err)
			setSuccess('Failed to send message.')
		} finally {
			setLoading(false)
		}
	})
	return (
		<>
			<PageLayout id='contact' title='Get In Touch' description='something amazing together'>
				<div className='flex w-full flex-col items-center justify-around gap-6 px-4 py-6 md:flex-row md:items-start md:gap-8 md:px-8'>
					<div className='w-full space-y-3 px-2 py-4 md:w-1/2 md:px-4'>
						<span className='flex items-center gap-2 text-xl font-bold'>
							<MessageIcon />
							Connect With Me
						</span>
						<p className='text-sm md:text-base'>
							Follow me on social media to stay updated with my latest status, projects, tech insights,
							and development journey. Let's cconnect and build something great together!
						</p>
						{socials.map((item) => {
							return (
								<ConnectCard
									link={item.link}
									desc={item.desc}
									icon={item.icon}
									label={item.label}
									key={item.label}
								/>
							)
						})}
					</div>
					<div className='space-y-2 px-4 py-4'>
						<span className='flex items-center gap-2 text-xl font-bold'>
							<EnvelopeIcon />
							Contact Form
						</span>
						<p className='text-sm md:text-base'>
							Have a project in mind? Send me a message and I'll get back to you as soon as possible!
						</p>
						<form onSubmit={sendEmail} className='flex flex-col gap-1 rounded-xl px-4 py-4 shadow-xl'>
							<span className='flex items-center gap-2 font-bold'>
								<EnvelopeIcon />
								Send Me a Message
							</span>
							<div className='flex items-center gap-2'>
								<div className='flex flex-1 flex-col gap-2'>
									<label>Name *</label>
									<input type='text' {...register('customer')} className='input grow' />
									{errors.customer && (
										<span className='text-sm text-red-500'>{errors.customer.message}</span>
									)}
								</div>
								<div className='flex flex-1 flex-col gap-2'>
									<label>Email *</label>
									<input type='text' {...register('email')} className='input grow' />
									{errors.email && (
										<span className='text-sm text-red-500'>{errors.email.message}</span>
									)}
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<label>Subject *</label>
								<input type='text' {...register('subject')} className='input grow' />
								{errors.subject && (
									<span className='text-sm text-red-500'>{errors.subject.message}</span>
								)}
							</div>
							<div className='flex flex-col gap-2'>
								<label>Message *</label>
								<textarea {...register('message')} className='input min-h-[120px] grow' />
								{errors.message && (
									<span className='text-sm text-red-500'>{errors.message.message}</span>
								)}
							</div>
							<Button className='mt-4 justify-center gap-2' disabled={loading}>
								{loading ? 'Sending...' : 'Send Message'}
							</Button>
							{success && <p className='mt-2 text-sm text-green-600'>{success}</p>}
						</form>
					</div>
				</div>
			</PageLayout>
		</>
	)
}

export { Contact }
