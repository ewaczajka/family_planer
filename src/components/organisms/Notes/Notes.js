import React from 'react'
import { SectionWrapper } from './Notes.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'

const Notes = () => {
	return (
		<SectionWrapper>
			<SectionHeader
				title='Notes'
				searchPlaceholder='Search Notes Title'
				addBtn='Add note'
			/>
		</SectionWrapper>
	)
}

export default Notes
