import React from 'react'
import { CalendarSection } from 'components/organisms/CalendarSection/CalendarSection'
import { NotesSection } from 'components/organisms/NotesSection/NotesSection'
import { TasksSection } from 'components/organisms/TasksSection/TasksSection'
import { Wrapper } from './Dashboard.styles'
import { useNavigateToLogin } from 'helpers/useNavigateToLogin'

export const Dashboard = () => {
	useNavigateToLogin()

	return (
		<Wrapper>
			<CalendarSection />
			<TasksSection />
			<NotesSection />
		</Wrapper>
	)
}
