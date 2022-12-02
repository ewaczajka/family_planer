import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from 'views/Dashboard/Dashboard'
import { CalendarSection } from 'components/organisms/CalendarSection/CalendarSection'
import { TasksSection } from 'components/organisms/TasksSection/TasksSection'
import { NotesSection } from 'components/organisms/NotesSection/NotesSection'
import { SignUp } from 'views/SignUp/SignUp'
import { LogIn } from 'views/LogIn/LogIn'
import { FamilyContext } from 'providers/CurrentFamilyProvider'

export const RoutesComponent = () => {
	const { activeFamily } = useContext(FamilyContext)

	return (
		<Routes>
			<Route
				path='/'
				element={
					activeFamily ? <Dashboard /> : <Navigate replace to='/login' />
				}
			/>
			<Route
				path='/calendar'
				element={
					activeFamily ? <CalendarSection /> : <Navigate replace to='/login' />
				}
			/>
			<Route
				path='/tasks'
				element={
					activeFamily ? <TasksSection /> : <Navigate replace to='/login' />
				}
			/>
			<Route
				path='/notes'
				element={
					activeFamily ? <NotesSection /> : <Navigate replace to='/login' />
				}
			/>
			<Route path='/signup' element={<SignUp />} />
			<Route path='/login' element={<LogIn />} />

			{/* <Route path='/selectUser' element={<SelectUser />} /> */}
		</Routes>
	)
}
