import React, { useEffect } from 'react'
import { CalendarSection } from 'components/organisms/CalendarSection/CalendarSection'
import { NotesSection } from 'components/organisms/NotesSection/NotesSection'
import { TasksSection } from 'components/organisms/TasksSection/TasksSection'
import { Wrapper } from './Dashboard.styles'

export const Dashboard = () => {

    useEffect(() => {
        const redirect = () => {
            if (window.innerWidth <= 1050) {
                window.location.href = '/tasks'
            }
        }

        window.addEventListener('resize', redirect)

        return () => {
            window.removeEventListener('resize', redirect)
        }
    }, [window.innerWidth])

    return (
        <Wrapper>
            <CalendarSection />
            <TasksSection />
            <NotesSection />
        </Wrapper>
    )
}
