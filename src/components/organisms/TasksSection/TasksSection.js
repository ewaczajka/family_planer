import React from 'react'
import { SectionWrapper } from './TasksSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'

const TasksSection = () => {
	return (
		<SectionWrapper>
			<SectionHeader
				title='Tasks'
				searchPlaceholder='Search Tasks'
				addBtnText='none'
				routeDirection='/tasks'
			/>
		</SectionWrapper>
	)
}

export default TasksSection
