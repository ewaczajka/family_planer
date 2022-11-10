import React from 'react'
import CalendarSection from 'components/organisms/CalendarSection/CalendarSection'
import NotesSection from 'components/organisms/NotesSection/NotesSection'
import TasksSection from 'components/organisms/TasksSection/TasksSection'

import styled from 'styled-components'

const Wrapper = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
`

const Dashboard = () => {
	return (
		<Wrapper>
			<CalendarSection />
			<TasksSection />
			<NotesSection />
		</Wrapper>
	)
}

export default Dashboard
