import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'
import { MainTemplate } from 'components/templates/MainTemplate'
import { GlobalStyle } from 'assets/styles/globalStyle'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from 'views/Dashboard'
import CalendarSection from 'components/organisms/CalendarSection/CalendarSection'
import TasksSection from 'components/organisms/TasksSection/TasksSection'
import NotesSection from 'components/organisms/NotesSection/NotesSection'

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<Routes>
						<Route path='/calendar' element={<CalendarSection />}></Route>
						<Route path='/tasks' element={<TasksSection />}></Route>
						<Route path='/notes' element={<NotesSection />}></Route>
						<Route path='/' element={<Dashboard />}></Route>
					</Routes>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	)
}

export default App
