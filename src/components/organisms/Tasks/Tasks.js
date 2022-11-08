import React from 'react'
import { SectionWrapper } from './Tasks.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'

const Tasks = () => {
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

export default Tasks
