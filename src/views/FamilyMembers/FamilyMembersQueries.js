import { useState, useContext } from 'react'
import { db } from 'firebase-config'
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	onSnapshot,
	doc,
	query,
	where,
} from 'firebase/firestore'
import { FamilyContext } from 'providers/CurrentFamilyProvider'

export const FamilyMembersQueries = () => {
	const { activeFamily } = useContext(FamilyContext)

	const [users, setUsers] = useState([])

	const usersCollectionRef = collection(db, 'members')
	const q = query(usersCollectionRef, where('familyID', '==', activeFamily))

	const getUsers = async () => {
		const data = await getDocs(q)
		setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
	}

	const getUsersQuery = () => {
		onSnapshot(usersCollectionRef, () => {
			getUsers()
		})
	}

	const deleteUserQuery = async id => {
		const userDoc = doc(db, 'members', id)
		await deleteDoc(userDoc)
	}

	const updateUserQuery = async (id, currentUser) => {
		const userDoc = doc(db, 'members', id)
		await updateDoc(userDoc, { ...currentUser })
	}

	const createUserQuery = async currentUser => {
		await addDoc(usersCollectionRef, currentUser)
	}

	return {
		users,
		getUsersQuery,
		deleteUserQuery,
		updateUserQuery,
		createUserQuery,
	}
}
