import { Navigate } from 'react-router-dom'

export const RouteElement = ({ activeFamily, activeUser, children }) => {
    return activeUser ? (
        children
    ) : activeFamily ? (
        <Navigate replace to="/family" />
    ) : (
        <Navigate replace to="/login" />
    )
}
