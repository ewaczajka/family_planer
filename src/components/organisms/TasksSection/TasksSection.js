import React from 'react'
import { SectionWrapper } from './TasksSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'

export const TasksSection = () => {
    return (
        <SectionWrapper>
            <SectionHeader
                title="Tasks"
                searchPlaceholder="Search Tasks"
                addBtnText="none"
                routeDirection="/tasks"
            />
        </SectionWrapper>
    )
}
