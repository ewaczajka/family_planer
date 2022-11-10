import React from 'react'
import { SectionWrapper } from './NotesSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'
import { Notes } from 'components/molecules/Notes/Notes'

const NotesSection = () => {
	return (
		<SectionWrapper>
			<SectionHeader
				title='Notes'
				searchPlaceholder='Search Notes Title'
				addBtn='Add note'
				routeDirection='/notes'
			/>
			<Notes />
		</SectionWrapper>
	)
}

export default NotesSection
