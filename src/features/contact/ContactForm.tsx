import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { formSchema } from '../../helpers'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { EnvelopeIcon } from '../../icons'
import { Button } from '../../ui'
import { useViewportAnimation } from '../../hooks'

type FormData = {
	customer: string
	email: string
	subject: string
	message: string
}

function ContactForm() {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState<string | null>(null)
	const { ref, isVisible } = useViewportAnimation({ animationClass: 'animate-fadeInRight' })

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({ resolver: yupResolver(formSchema) })

    console.log(`service_id ::: `,import.meta.env.VITE_EMAILJS_SERVICE_ID)
    console.log(`template_id ::: `,import.meta.env.VITE_EMAILJS_TEMPLATE_ID)

	const sendEmail = handleSubmit(async (data: FormData) => {
		setLoading(true)
		setSuccess(null)
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
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
		<div ref={ref} className='w-full space-y-2 px-4 py-4 md:w-1/2'>
			{isVisible && (
				<>
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
						<div className='flex flex-col items-center gap-2 md:flex-row'>
							<div className='flex w-full flex-1 flex-col gap-2 md:w-0'>
								<label>Name *</label>
								<input type='text' {...register('customer')} className='input grow' />
								{errors.customer && (
									<span className='text-sm text-red-500'>{errors.customer.message}</span>
								)}
							</div>
							<div className='flex w-full flex-1 flex-col gap-2 md:w-0'>
								<label>Email *</label>
								<input type='text' {...register('email')} className='input grow' />
								{errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<label>Subject *</label>
							<input type='text' {...register('subject')} className='input grow' />
							{errors.subject && <span className='text-sm text-red-500'>{errors.subject.message}</span>}
						</div>
						<div className='flex flex-col gap-2'>
							<label>Message *</label>
							<textarea {...register('message')} className='input min-h-[120px] grow' />
							{errors.message && <span className='text-sm text-red-500'>{errors.message.message}</span>}
						</div>
						<Button className='mt-4 justify-center gap-2' disabled={loading}>
							{loading ? 'Sending...' : 'Send Message'}
						</Button>
						{success && <p className='mt-2 text-sm text-green-600'>{success}</p>}
					</form>
				</>
			)}
		</div>
	)
}

export { ContactForm }
