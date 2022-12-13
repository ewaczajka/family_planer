import { createContext, useContext, useState } from 'react'

export const UserContext = createContext({
	activeUser: '',
})

export const ActiveUserProvider = ({ children }) => {
	const [activeUser, setActiveUser] = useState('')

	return (
		<UserContext.Provider value={{ activeUser, setActiveUser }}>
			{children}
		</UserContext.Provider>
	)
}

export const useActiveUser = () => {
	const { activeUser, setActiveUser } = useContext(UserContext)
	return { activeUser, setActiveUser }
}
