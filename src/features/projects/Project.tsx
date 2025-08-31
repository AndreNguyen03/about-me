import { PageLayout } from '../../ui'
import { ProjectCard, type ProjectType } from './ProjectCard'

const projects: ProjectType[] = [
	{
		title: 'NFT Marketplace Website',
		type: 'Web Application',
		status: 'Completed',
		featured: false,
		description:
			'A modern NFT marketplace that lets users connect crypto wallets, mint, list, buy, sell, and manage NFTs. Built with a secure RESTful API, real-time updates via WebSocket, and decentralized metadata storage on IPFS.',
		period: 'Sep 2024 – Dec 2024',
		tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Solidity'],
		links: {
			code: 'https://github.com/AndreNguyen03/SE121.P11-Do-An-1',
			demo: '#'
		}
	},

	{
		title: 'LLMs-Powered Chat (VS Code Extension)',
		type: 'VS Code Extension',
		status: 'Completed',
		featured: false,
		description:
			'A Visual Studio Code extension powered by AI that provides intelligent code suggestions, inline code generation, and integrated AI chat. Enhances productivity with seamless project comprehension and real-time assistance.',
		period: 'Mar 2025 – Jun 2025',
		tech: ['TypeScript', 'Express.js', 'JavaScript', 'VS Code Extension API', 'GitHub'],
		links: {
			code: '#',
			demo: '#'
		}
	},

	{
		title: 'Restaurant Management Website',
		type: 'Web Application',
		status: 'Completed',
		featured: true,
		description:
			'A restaurant management system that streamlines reservations, online ordering, employee and inventory management, billing, and reporting. Delivers a user-friendly interface that improves efficiency, accuracy, and customer experience.',
		period: 'Oct 2024 – Dec 2024',
		tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
		links: {
			code: '#',
			demo: '#'
		}
	}
]
function Project() {
	return (
		<>
			<PageLayout id='projects' title='My Projects' description='A show case of my development work'>
				<div className='flex h-fit w-full items-start justify-center gap-4 rounded-lg border-t-2 border-slate-200 px-8 py-8 shadow-xl'>
					{projects.map((item) => (
						<ProjectCard project={item} key={item.title} />
					))}
				</div>
			</PageLayout>
		</>
	)
}

export { Project }
