import React from 'react'
import { SectionWrapper } from './CalendarSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'

export const CalendarSection = () => {
	return (
		<SectionWrapper>
			<SectionHeader
				title='Calendar'
				searchPlaceholder='Search Events'
				addBtnText='Add event'
				routeDirection='/calendar'
			/>
		</SectionWrapper>
	)
}
