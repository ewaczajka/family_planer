import React, { useState } from 'react'
import { SectionWrapper, Wrapper } from './TasksSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'
import { Tasks } from 'components/molecules/Tasks/Tasks'
import { TasksAddField } from 'components/molecules/TasksAddField/TasksAddField'

export const TasksSection = () => {
    const [searchPhrase, setSearchPhrase] = useState('')

    const handleChangeSearchPhrase = e => {
        setSearchPhrase(e.target.value)
    }

    return (
        <SectionWrapper>
            <SectionHeader
                title="Tasks"
                searchPlaceholder="Search Tasks"
                addBtnText="none"
                routeDirection="/tasks"
                handleChange={handleChangeSearchPhrase}
            />
            <Wrapper>
                <Tasks searchPhrase={searchPhrase} />
                <TasksAddField />
            </Wrapper>
        </SectionWrapper>
    )
}
