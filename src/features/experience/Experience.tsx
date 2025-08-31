import { TabProvider } from '../../contexts'
import { BriefcaseIcon, GraduateIcon, SwatchbookIcon } from '../../icons'
import { HeaderDescription, HeaderTitle, PageHeader, PageLayout, Tab, TabList, TabPanel, TabPanels } from '../../ui'
import { ExperienceCard } from './ExperienceCard'

function Experience() {
	return (
		<>
			<PageHeader>
				<HeaderTitle>My Experience</HeaderTitle>
				<HeaderDescription>
					A journey through my professional growth, education, and achievements.
				</HeaderDescription>
			</PageHeader>
			<PageLayout>
				<div className='h-fit w-full rounded-xl px-4 py-4 shadow-xl'>
					<TabProvider defaultValue='work'>
						<TabList>
							<Tab value='work' icon={<BriefcaseIcon />}>
								Work Experience
							</Tab>
							<Tab value='education' icon={<GraduateIcon />}>
								Education
							</Tab>
							<Tab value='achievements' icon={<SwatchbookIcon />}>
								Achievements
							</Tab>
						</TabList>

						<TabPanels>
							<TabPanel value='work'>
								<ExperienceCard />
							</TabPanel>
							<TabPanel value='education'>
								<ExperienceCard />
							</TabPanel>
							<TabPanel value='achievements'>
								<ExperienceCard />
							</TabPanel>
						</TabPanels>
					</TabProvider>
				</div>
			</PageLayout>
		</>
	)
}

export { Experience }
