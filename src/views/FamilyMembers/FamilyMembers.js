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
} from 'firebase/firestore'
import { Wrapper } from './FamilyMembers.styles'
import { User } from 'components/atoms/User/User'

export const FamilyMembers = () => {
	const { activeFamily } = useContext(FamilyContext)

	const [users, setUsers] = useState([])
	const usersCollectionRef = collection(db, 'members')

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef)
			setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}
		onSnapshot(usersCollectionRef, () => {
			getUsers()
		})
	}, [])

	return (
		<Wrapper>
			{users.map(user => (
				<User
					key={user.id}
					name={user.name}
					color={user.color}
					// deleteUser={deleteUser}
					// editUser={editUser}
				/>
			))}
			<button>Add family member</button>
		</Wrapper>
	)
}
