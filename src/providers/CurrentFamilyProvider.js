import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebase-config'

export const FamilyContext = React.createContext({
    activeFamily: '',
})

export const CurrentFamilyProvider = ({ children }) => {
    const [activeFamily, setActiveFamily] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, family => {
            family ? setActiveFamily(family.uid) : setActiveFamily('')
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    return (
        <FamilyContext.Provider value={{ activeFamily }}>
            {isLoading ? null : children}
        </FamilyContext.Provider>
    )
}
