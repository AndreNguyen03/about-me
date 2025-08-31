import { TabProvider } from '../../contexts'
import { BriefcaseIcon, GraduateIcon, SwatchbookIcon } from '../../icons'
import { PageLayout, Tab, TabList, TabPanel, TabPanels } from '../../ui'
import { ExperienceCard } from './ExperienceCard'

const workExp = null
// const eduExp = [
// 	{
// 		degree: 'Bachelor of Software Engineer',
// 		school: 'University of Infomation Technology, VNU-HCM',
// 		gpa: '8.6/10.0',
// 		date: '2022 - Present',
// 		locale: 'HCMC, Vietnam',
// 		desc: 'Currently pursuing degree in Software Engineering with focus on design and develope highload system, etc...',
// 		tags: ['Data Structures', 'Web Programming', 'Software Engineering', 'OOP']
// 	}
// ]
const achieExp = null

function Experience() {
	return (
		<>
			<PageLayout
				id='experience'
				title='My Experience'
				description='A journey through my professional growth, education, and achievements.'
			>
				<div className='h-fit w-full rounded-xl px-4 py-4 shadow-xl'>
					<TabProvider defaultValue='education'>
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
								{workExp ? <ExperienceCard /> : <span className='m-auto text-lg italic'>Not yet</span>}
							</TabPanel>
							<TabPanel value='education'>
								<ExperienceCard />
							</TabPanel>
							<TabPanel value='achievements'>
								{achieExp ? <ExperienceCard /> : <span className='m-auto text-lg italic'>Not yet</span>}
							</TabPanel>
						</TabPanels>
					</TabProvider>
				</div>
			</PageLayout>
		</>
	)
}

export { Experience }
