import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { ACTIVE_USER_ID } from 'data/consts'

export const UserContext = createContext({
	activeUser: '',
})

export const ActiveUserProvider = ({ children }) => {
	const { add, get } = useLocalStorage()
	const activeUserId = get(ACTIVE_USER_ID) || ''
	const [user, setUser] = useState(activeUserId)

	const setUserId = userId => {
		setUser(userId)
		if (userId) {
			add(ACTIVE_USER_ID, userId)
		}
	}

	return (
		<UserContext.Provider
			value={{ activeUser: user, setActiveUser: setUserId }}>
			{children}
		</UserContext.Provider>
	)
}

export const useActiveUser = () => {
	const { activeUser, setActiveUser } = useContext(UserContext)
	return { activeUser, setActiveUser }
}
