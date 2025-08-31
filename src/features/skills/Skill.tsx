import { TabProvider } from '../../contexts'
import { HeaderDescription, HeaderTitle, PageHeader, PageLayout, Tab, TabList, TabPanel, TabPanels } from '../../ui'
import { SkillCard } from './'

function Skill() {
	return (
		<>
			<PageHeader>
				<HeaderTitle>My Skills</HeaderTitle>
				<HeaderDescription>
					Technical expertise and proficiency across different domans of software development
				</HeaderDescription>
			</PageHeader>
			<PageLayout>
				<div className='h-fit w-full rounded-xl px-4 py-4 shadow-xl'>
					<TabProvider defaultValue='programming'>
						<TabList>
							<Tab value='programming'>Programming</Tab>
							<Tab value='frontend'>Frontend</Tab>
							<Tab value='backend'>Backend</Tab>
							<Tab value='tools'>Tools</Tab>
						</TabList>
						<TabPanels border={false}>
							<TabPanel value='programming' className='grid grid-cols-3 gap-4'>
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
							</TabPanel>
							<TabPanel value='frontend' className='grid grid-cols-3 gap-4'>
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
							</TabPanel>
							<TabPanel value='backend' className='grid grid-cols-3 gap-4'>
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
							</TabPanel>
							<TabPanel value='tools' className='grid grid-cols-3 gap-4'>
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
								<SkillCard />
							</TabPanel>
						</TabPanels>
					</TabProvider>
				</div>
			</PageLayout>
		</>
	)
}

export { Skill }
