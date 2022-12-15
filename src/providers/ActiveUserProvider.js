import { createContext, useContext, useState } from 'react'

export const UserContext = createContext({
    activeUser: '',
})

const KEY = 'active_user_id'

export const ActiveUserProvider = ({ children }) => {
    const activeUserId = window.localStorage.getItem(KEY) || ''
    const [user, setUser] = useState(activeUserId)

    const setUserId = userId => {
        if (userId) {
            setUser(userId)
            window.localStorage.setItem(KEY, userId)
        }
    }

    return (
        <UserContext.Provider
            value={{ activeUser: user, setActiveUser: setUserId }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useActiveUser = () => {
    const { activeUser, setActiveUser } = useContext(UserContext)
    return { activeUser, setActiveUser }
}
