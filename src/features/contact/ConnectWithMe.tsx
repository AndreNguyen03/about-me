import { useViewportAnimation } from '../../hooks'
import { FacebookIconv2, GithubIcon, LinkedinIconv2, MessageIcon } from '../../icons'
import { ConnectCard } from './ConnectCard'

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

function ConnectWithMe() {
	const { ref, isVisible } = useViewportAnimation({ animationClass: 'animate-fadeInLeft' })

	return (
		<div ref={ref} className='w-full space-y-3 px-2 py-4 md:w-1/2 md:px-4'>
			{isVisible && (
				<>
					<span className='flex items-center gap-2 text-xl font-bold'>
						<MessageIcon />
						Connect With Me
					</span>
					<p className='text-sm md:text-base'>
						Follow me on social media to stay updated with my latest status, projects, tech insights, and
						development journey. Let's cconnect and build something great together!
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
				</>
			)}
		</div>
	)
}

export { ConnectWithMe }
