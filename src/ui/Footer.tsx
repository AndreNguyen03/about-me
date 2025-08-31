import { EnvelopeIcon, LinkedinIcon } from '../icons'
import { Button } from './Button'

function Footer() {
	return (
		<div className='flex h-60 w-full items-start justify-center gap-2 px-28 pt-10 border-t-2'>
			<div className='flex flex-1 flex-col gap-2'>
				<span className='text-lg font-semibold'>Portfolio</span>
				<p className='text-sm'>
					Passionate developer creating innovative solutions and beautiful experiences. Let's build something
					amazing together
				</p>
				<div className='flex items-center gap-4'>
					<LinkedinIcon />
					<LinkedinIcon />
					<LinkedinIcon />
					<LinkedinIcon />
				</div>
			</div>
			<div className='flex flex-1 flex-col gap-2'>
				<span className='text-lg font-semibold'>Quick Links</span>
				<div className='grid grid-cols-2 gap-2'>
					<span className='flex items-center gap-2 text-sm'>
						<LinkedinIcon />
						Home
					</span>
					<span className='flex items-center gap-2'>
						<LinkedinIcon />
						Home
					</span>
					<span className='flex items-center gap-2'>
						<LinkedinIcon />
						Home
					</span>
					<span className='flex items-center gap-2'>
						<LinkedinIcon />
						Home
					</span>
					<span className='flex items-center gap-2'>
						<LinkedinIcon />
						Home
					</span>
					<span className='flex items-center gap-2'>
						<LinkedinIcon />
						Home
					</span>
					<span className='flex items-center gap-2'>
						<LinkedinIcon />
						Home
					</span>
				</div>
			</div>
			<div className='flex flex-1 flex-col gap-2'>
				<span className='text-lg font-semibold'>Get In Touch</span>
				<span className='flex items-center gap-2 text-sm'>
					<EnvelopeIcon /> ngocanh030110@gmail.com
				</span>
				<span className='flex items-center gap-2 text-sm'>
					<EnvelopeIcon /> Available for freelance work
				</span>
				<Button className='w-fit mt-2'>
					Let's Work Together <EnvelopeIcon />
				</Button>
			</div>
			<div className='flex flex-1 flex-col gap-2'>
				<span className='text-lg font-semibold'>Stay Updated</span>
				<p>
					Subcribe to get notified about my latest projects and articles.
				</p>
                <Button className='justify-center'>
                    Subcribe Now
                </Button>
			</div>
		</div>
	)
}

export { Footer }
