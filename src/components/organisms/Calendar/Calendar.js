import React from 'react'
import { SectionWrapper } from './Calendar.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'

const Calendar = () => {
	return (
		<SectionWrapper>
			<SectionHeader
				title='Calendar'
				searchPlaceholder='Search Events'
				addBtn='Add event'
			/>
		</SectionWrapper>
	)
}

export default Calendar
