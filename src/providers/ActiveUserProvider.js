import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { ACTIVE_USER_DATA } from 'data/consts'

export const UserContext = createContext({
    activeUser: '',
})

export const ActiveUserProvider = ({ children }) => {
    const { add, get } = useLocalStorage()
    const activeUserData = JSON.parse(get(ACTIVE_USER_DATA)) || ''

    const [user, setUser] = useState(activeUserData)
    const setUserData = userData => {
        setUser(userData)
        if (userData) {
            add(ACTIVE_USER_DATA, JSON.stringify(userData))
        }
    }

    return (
        <UserContext.Provider
            value={{ activeUser: user, setActiveUser: setUserData }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useActiveUser = () => {
    const { activeUser, setActiveUser } = useContext(UserContext)
    return { activeUser, setActiveUser }
}
