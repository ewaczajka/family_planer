import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FamilyContext } from 'providers/CurrentFamilyProvider'

export const useNavigateToLogin = () => {
    const navigate = useNavigate()
    const {activeFamily} = useContext(FamilyContext)
    
    return (
        activeFamily ? null : navigate('/login')
    )
}
