import { TabProvider } from '../../contexts'
import { PageLayout, Tab, TabList, TabPanel, TabPanels } from '../../ui'
import { SkillCard } from './'

const skillsData = {
	Programming: [
		{ label: 'JavaScript', percent: 85, subtitle: 'Language' },
		{ label: 'TypeScript', percent: 90, subtitle: 'Language' },
		{ label: 'Python', percent: 70, subtitle: 'Language' },
		{ label: 'C#', percent: 70, subtitle: 'Language' },
		{ label: 'Java', percent: 70, subtitle: 'Language' },
		{ label: 'C++', percent: 70, subtitle: 'Language' }
	],
	Frontend: [
		{ label: 'React', percent: 90, subtitle: 'Framework' },
		{ label: 'Next.js', percent: 85, subtitle: 'Framework' },
		{ label: 'TailwindCSS', percent: 80, subtitle: 'CSS' },
		{ label: 'Material UI', percent: 75, subtitle: 'UI Library' }
	],
	Backend: [
		{ label: 'NestJS', percent: 85, subtitle: 'Framework' },
		{ label: 'ASP.NET Core', percent: 75, subtitle: 'Framework' },
		{ label: 'Springboot', percent: 75, subtitle: 'Framework' },
		{ label: 'MongoDB', percent: 80, subtitle: 'Database' },
		{ label: 'SQL Server', percent: 75, subtitle: 'Database' },
		{ label: 'PostgreSQL', percent: 75, subtitle: 'Database' }
	],
	Tools: [
		{ label: 'Git', percent: 90, subtitle: 'Version Control' },
		{ label: 'Docker', percent: 80, subtitle: 'Container' },
		{ label: 'Postman', percent: 75, subtitle: 'API Tool' },
		{ label: 'Figma', percent: 70, subtitle: 'Design' }
	]
}

function Skill() {

	return (
		<>
			<PageLayout id='skills'
				title='My Skills'
				description='Technical expertise and proficiency across different domans of software development'
			>
				<div className='h-fit w-full rounded-xl px-4 py-4 shadow-xl'>
					<TabProvider defaultValue='programming'>
						<TabList>
							<Tab value='programming'>Programming</Tab>
							<Tab value='frontend'>Frontend</Tab>
							<Tab value='backend'>Backend</Tab>
							<Tab value='tools'>Tools</Tab>
						</TabList>
						<TabPanels border={false}>
							{/* Programming */}
							<TabPanel value='programming' className='grid grid-cols-3 gap-4'>
								{skillsData.Programming.map((item, i) => (
									<SkillCard
										key={i}
										label={item.label}
										percent={item.percent}
										subtitle={item.subtitle}
									/>
								))}
							</TabPanel>

							{/* Frontend */}
							<TabPanel value='frontend' className='grid grid-cols-3 gap-4'>
								{skillsData.Frontend.map((item, i) => (
									<SkillCard
										key={i}
										label={item.label}
										percent={item.percent}
										subtitle={item.subtitle}
									/>
								))}
							</TabPanel>

							{/* Backend */}
							<TabPanel value='backend' className='grid grid-cols-3 gap-4'>
								{skillsData.Backend.map((item, i) => (
									<SkillCard
										key={i}
										label={item.label}
										percent={item.percent}
										subtitle={item.subtitle}
									/>
								))}
							</TabPanel>

							{/* Tools */}
							<TabPanel value='tools' className='grid grid-cols-3 gap-4'>
								{skillsData.Tools.map((item, i) => (
									<SkillCard
										key={i}
										label={item.label}
										percent={item.percent}
										subtitle={item.subtitle}
									/>
								))}
							</TabPanel>
						</TabPanels>
					</TabProvider>
				</div>
			</PageLayout>
		</>
	)
}

export { Skill }
