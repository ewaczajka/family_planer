import React from 'react'
import { SectionWrapper } from './TasksSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'

const TasksSection = () => {
	return (
		<SectionWrapper>
			<SectionHeader
				title='Tasks'
				searchPlaceholder='Search Tasks'
				addBtn='none'
			/>
		</SectionWrapper>
	)
}

export default TasksSection
