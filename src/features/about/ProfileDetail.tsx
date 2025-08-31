import {
	BellIcon,
	BriefcaseIcon,
	DownloadIcon,
	EnvelopeIcon,
	GraduateIcon,
	LocationIcon,
	PhoneIcon,
	UserIcon
} from '../../icons'
import { Badge, Button } from '../../ui'
import { ProfileInfoCard } from './ProfileInfoCard'

function ProfileDetail() {
	return (
		<div className='h-fit w-1/2 rounded-lg px-4 py-2 shadow-xl'>
			<p className='text-xl font-bold'>Hello There!</p>
			<p className='py-4 text-sm'>
				I am a student of Software Engineering at the University of Information Technology (UIT) with a strong
				passion for web and technology development. I enjoy learning new things and always strive to improve my
				skills in programming, particularly in frontend and backend development.
			</p>
			<div className='grid grid-cols-2 gap-4 py-2'>
				<ProfileInfoCard icon={<UserIcon />} title='Name' detail='Nguyen Nguyen Ngoc Anh' />
				<ProfileInfoCard icon={<LocationIcon />} title='Location' detail='HCMC, Vietnam' />
				<ProfileInfoCard icon={<GraduateIcon />} title='Education' detail='Software Engineering, UIT' />
				<ProfileInfoCard icon={<EnvelopeIcon />} title='Email' detail='ngocanh030110@gmail.com' />
				<ProfileInfoCard icon={<PhoneIcon />} title='Phone' detail='+085703####' />
				<ProfileInfoCard icon={<BellIcon />} title='Status' detail='Available for Work' />
			</div>
			<div className='py-2'>
				<p className='py-1 text-sm font-semibold'>Interests & Focus</p>
				<div className='flex gap-1'>
					<Badge>Frontend Development</Badge>
					<Badge>Backend Development</Badge>
					<Badge>Web Technologies</Badge>
				</div>
			</div>
			<div className='flex gap-2 py-2'>
				<Button>
					<DownloadIcon /> Download My CV
				</Button>
				<Button variant='secondary'>
					<BriefcaseIcon />
					Hire Me Now
				</Button>
			</div>
		</div>
	)
}

export { ProfileDetail }
