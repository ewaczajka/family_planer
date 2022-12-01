import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FamilyContext } from 'providers/CurrentFamilyProvider'

export const useNavigateToLogin = () => {
	const navigate = useNavigate()
	const { activeFamily } = useContext(FamilyContext)
	debugger

	useEffect(() => {
		if (activeFamily) {
			debugger
		} else {
			return navigate('/login')
		}
	}, [])
}
