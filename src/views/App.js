import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'
import { MainTemplate } from 'components/templates/MainTemplate'
import { GlobalStyle } from 'assets/styles/globalStyle'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from 'views/Dashboard/Dashboard'
import { CalendarSection } from 'components/organisms/CalendarSection/CalendarSection'
import { TasksSection } from 'components/organisms/TasksSection/TasksSection'
import { NotesSection } from 'components/organisms/NotesSection/NotesSection'
import { SignUp } from 'views/SignUp/SignUp'
import { LogIn } from 'views/LogIn/LogIn'
import CurrentFamilyProvider from 'providers/CurrentFamilyProvider'

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<CurrentFamilyProvider>
					<MainTemplate>
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/calendar' element={<CalendarSection />} />
							<Route path='/tasks' element={<TasksSection />} />
							<Route path='/notes' element={<NotesSection />} />
							<Route path='/signup' element={<SignUp />} />
							<Route path='/login' element={<LogIn />} />
							{/* <Route path='/selectUser' element={<SelectUser />} /> */}
						</Routes>
					</MainTemplate>
				</CurrentFamilyProvider>
			</ThemeProvider>
		</Router>
	)
}

export default App
