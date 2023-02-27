import React, { useState } from 'react'
import { SectionWrapper } from './CalendarSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'
import { Calendar } from 'components/molecules/Calendar/Calendar'

export const CalendarSection = () => {
    return (
        <SectionWrapper>
            <SectionHeader
                title="Calendar"
                searchPlaceholder="Search Events"
                addBtnText="Add event"
                routeDirection="/calendar"
            />
            <Calendar />

        </SectionWrapper>
    )
}
