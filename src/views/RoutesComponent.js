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

export const RoutesComponent = () => {
    const { activeFamily } = useContext(FamilyContext)
    const { activeUser } = useContext(UserContext)

    return (
        <Routes>
            <Route
                path="/"
                element={
                    activeUser ? (
                        <Dashboard />
                    ) : activeFamily ? (
                        <Navigate replace to="/family" />
                    ) : (
                        <Navigate replace to="/login" />
                    )
                }
            />
            <Route
                path="/calendar"
                element={
                    activeUser ? (
                        <CalendarSection />
                    ) : activeFamily ? (
                        <Navigate replace to="/family" />
                    ) : (
                        <Navigate replace to="/login" />
                    )
                }
            />
            <Route
                path="/tasks"
                element={
                    activeUser ? (
                        <TasksSection />
                    ) : activeFamily ? (
                        <Navigate replace to="/family" />
                    ) : (
                        <Navigate replace to="/login" />
                    )
                }
            />
            <Route
                path="/notes"
                element={
                    activeUser ? (
                        <NotesSection />
                    ) : activeFamily ? (
                        <Navigate replace to="/family" />
                    ) : (
                        <Navigate replace to="/login" />
                    )
                }
            />
            <Route
                path="/family"
                element={
                    activeFamily ? (
                        <FamilyMembers />
                    ) : (
                        <Navigate replace to="/login" />
                    )
                }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
        </Routes>
    )
}
