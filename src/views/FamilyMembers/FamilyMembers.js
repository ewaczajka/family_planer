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
import { UserAddField } from 'components/molecules/UserAddField/UserAddField'
import { theme } from 'assets/styles/theme'

export const FamilyMembers = () => {
	const usersCollectionRef = collection(db, 'members')
	const { activeFamily } = useContext(FamilyContext)

	const initialValues = {
		currentUser: { familyID: activeFamily, color: theme.colors.gray },
	}

	const [users, setUsers] = useState([])
	const [editing, setEditing] = useState(false)
	const [creating, setCreating] = useState(false)
	const [currentUser, setCurrentUser] = useState(initialValues.currentUser)
	const [error, setError] = useState('')
	const [selectedColor, setSelectedColor] = useState(
		initialValues.currentUser.color
	)

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef)
			setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}
		onSnapshot(usersCollectionRef, () => {
			getUsers()
		})
	}, [])

	const deleteUser = async id => {
		if (id) {
			const userDoc = doc(db, 'members', id)
			await deleteDoc(userDoc)
		} else {
			setCreating(false)
		}
	}

	const saveUser = async id => {
		if (!currentUser.name) {
			setError('Name is required!')
		} else {
			if (editing) {
				setEditing(false)
				const userDoc = doc(db, 'members', id)
				await updateDoc(userDoc, { ...currentUser })
			} else if (creating) {
				setCreating(false)
				await addDoc(usersCollectionRef, currentUser)
			}
			setCurrentUser(initialValues.currentUser)
			setSelectedColor(initialValues.currentUser.color)
		}
	}

	const editUser = (id, name, color) => {
		setEditing(id)
		setCurrentUser(prevState => ({ ...prevState, name: name, color: color }))
		setSelectedColor(color)
		setCreating(false)
		setError('')
	}

	const createNewUser = () => {
		setCreating(true)
		setEditing(false)
		setError('')
		setCurrentUser(initialValues.currentUser)
		setSelectedColor(initialValues.currentUser.color)
	}

	const handleName = e => {
		setCurrentUser(prevState => ({ ...prevState, name: e.target.value }))
		setError('')
	}

	const handleColor = e => {
		setCurrentUser(prevState => ({ ...prevState, color: e.target.value }))
		setSelectedColor(e.target.value)
	}

	const getLogoLetters = name => {
		const LogoLetters = name.match(/\b(\w)/g)
		return LogoLetters.join('').toUpperCase()
	}

	return (
		<Wrapper>
			{users.map(user =>
				user.familyID === activeFamily ? (
					editing !== user.id ? (
						<UserField
							key={user.id}
							id={user.id}
							name={user.name}
							color={user.color}
							editUser={editUser}
							logoLetters={getLogoLetters(user.name)}
						/>
					) : (
						<UserEditor
							key={user.id}
							id={user.id}
							name={user.name}
							deleteUser={deleteUser}
							handleName={handleName}
							handleColor={handleColor}
							selectedColor={selectedColor}
							saveUser={saveUser}
							error={error}
							logoLetters={getLogoLetters(currentUser.name)}
						/>
					)
				) : null
			)}
			{creating ? (
				<UserEditor
					deleteUser={deleteUser}
					handleName={handleName}
					handleColor={handleColor}
					selectedColor={selectedColor}
					saveUser={saveUser}
					error={error}
					logoLetters={currentUser.name ? getLogoLetters(currentUser.name) : ''}
				/>
			) : null}

			<UserAddField createNewUser={createNewUser} />
		</Wrapper>
	)
}
