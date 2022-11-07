import React from 'react'
import Calendar from 'components/organisms/Calendar/Calendar'
import Notes from 'components/organisms/Notes/Notes'
import Tasks from 'components/organisms/Tasks/Tasks'

import styled from 'styled-components'

const Wrapper = styled.div`
	height: calc(100vh - 68px);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	padding: 22px;
`

const Dashboard = () => {
	return (
		<Wrapper>
			<Calendar />
			<Tasks />
			<Notes />
		</Wrapper>
	)
}

export default Dashboard
