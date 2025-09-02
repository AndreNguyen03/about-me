import { useViewportAnimation } from '../../hooks'
import { PageLayout } from '../../ui'
import { ProjectCard, type ProjectType } from './ProjectCard'

const projects: ProjectType[] = [
	{
		title: 'Private Clinic Management System',
		type: 'Desktop Application',
		status: 'Completed',
		featured: false,
		description:
			'A Java-based system for private clinics, enabling patient visit management, billing, revenue reporting, and category management. Built with MVC architecture for efficient healthcare operations.',
		period: 'June 2024 – July 2024',
		tech: ['Java', 'MVC Architecture', 'Neon DB'],
		links: {
			code: 'https://github.com/AndreNguyen03/SE104-Pharmacy-Clinic'
		}
	},

	{
		title: 'LLMs-Powered Chat',
		type: 'VS Code Extension',
		status: 'Completed',
		featured: false,
		description:
			'A Visual Studio Code extension powered by AI that provides intelligent code suggestions, inline code generation, and integrated AI chat. Enhances productivity with seamless project comprehension and real-time assistance.',
		period: 'Mar 2025 – Jun 2025',
		tech: ['TypeScript', 'Express.js', 'JavaScript', 'VS Code Extension API', 'GitHub'],
		links: {
			code: 'https://github.com/FhuAnn/Cofire-Frontend-'
		}
	},

	{
		title: 'Restaurant Management Website',
		type: 'Web Application',
		status: 'Completed',
		featured: false,
		description:
			'A restaurant management system that streamlines reservations, online ordering, employee and inventory management, billing, and reporting. Delivers a user-friendly interface that improves efficiency, accuracy, and customer experience.',
		period: 'Oct 2024 – Dec 2024',
		tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
		links: {
			code: 'https://github.com/AndreNguyen03/Front-end-Restaurant-Management'
		}
	}
]
function Project() {
	const { ref, isVisible } = useViewportAnimation({ animationClass: 'animate-fadeInLeft lg:animate-fadeInDown' })
	return (
		<>
			<PageLayout id='projects' title='My Projects' description='A show case of my development work'>
				<div ref={ref}>
					{isVisible && (
						<div className='flex h-fit w-full flex-col items-start justify-center gap-6 rounded-lg border-t-2 border-slate-200 px-4 py-6 shadow-xl md:flex-row md:flex-wrap md:px-8 md:py-8'>
							{projects.map((item) => (
								<ProjectCard project={item} key={item.title} />
							))}
						</div>
					)}
				</div>
			</PageLayout>
		</>
	)
}

export { Project }
