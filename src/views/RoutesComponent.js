import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from 'views/Dashboard/Dashboard'
import { CalendarSection } from 'components/organisms/CalendarSection/CalendarSection'
import { TasksSection } from 'components/organisms/TasksSection/TasksSection'
import { NotesSection } from 'components/organisms/NotesSection/NotesSection'
import { SignUp } from 'views/SignUp/SignUp'
import { LogIn } from 'views/LogIn/LogIn'
import { FamilyMembers } from 'views/FamilyMembers/FamilyMembers'
import { FamilyContext } from 'providers/CurrentFamilyProvider'
import { UserContext } from 'providers/ActiveUserProvider'
import { RouteElement } from 'components/molecules/RouteElement/RouteElement'

export const RoutesComponent = () => {
	const { activeFamily } = useContext(FamilyContext)
	const { activeUser } = useContext(UserContext)

	return (
		<Routes>
			<Route
				path='/'
				element={
					<RouteElement
						activeFamily={activeFamily}
						activeUser={activeUser}>
						<Dashboard />
					</RouteElement>
				}
			/>
			<Route
				path='/calendar'
				element={
					<RouteElement
						activeFamily={activeFamily}
						activeUser={activeUser}>
						<CalendarSection />
					</RouteElement>
				}
			/>
			<Route
				path='/tasks'
				element={
					<RouteElement
						activeFamily={activeFamily}
						activeUser={activeUser}>
						<TasksSection />
					</RouteElement>
				}
			/>
			<Route
				path='/notes'
				element={
					<RouteElement
						activeFamily={activeFamily}
						activeUser={activeUser}>
						<NotesSection />
					</RouteElement>
				}
			/>
			<Route
				path='/family'
				element={
					activeFamily ? (
						<FamilyMembers />
					) : (
						<Navigate replace to='/login' />
					)
				}
			/>
			<Route path='/signup' element={<SignUp />} />
			<Route path='/login' element={<LogIn />} />
		</Routes>
	)
}
