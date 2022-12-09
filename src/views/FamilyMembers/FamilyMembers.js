import React, { useContext, useEffect, useState } from 'react'
import { FamilyContext } from 'providers/CurrentFamilyProvider'
import { db } from 'firebase-config'
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	onSnapshot,
	doc,
} from 'firebase/firestore'
import { Wrapper } from './FamilyMembers.styles'
import { UserField } from 'components/molecules/UserField/UserField'
import { UserEditor } from 'components/molecules/UserEditor/UserEditor'
import { UserAddBtn } from 'components/molecules/UserAddField/UserAddField'

export const FamilyMembers = () => {
	const usersCollectionRef = collection(db, 'members')
	const { activeFamily } = useContext(FamilyContext)

    const name = 'Mateusz'
    const color = 'blue'

	return (
		<Wrapper>
            <UserField name={name} color={color}>

            </UserField>
            <UserEditor name={name} color={color}>

            </UserEditor>
            <UserAddBtn />
		</Wrapper>
	)
}
