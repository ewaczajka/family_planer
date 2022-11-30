import React, { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebase-config'

export const FamilyContext = React.createContext({
    activeFamily: '',
})

const CurrentFamilyProvider = ( {children} ) => {
    const [activeFamily, setActiveFamily] = useState({})
    
    onAuthStateChanged(auth, (family) => {
        family ? setActiveFamily(family.uid) : setActiveFamily('')
    })

    return (
        <FamilyContext.Provider value={{activeFamily}}>
            {children}
        </FamilyContext.Provider>
    ) 
}

export default CurrentFamilyProvider
