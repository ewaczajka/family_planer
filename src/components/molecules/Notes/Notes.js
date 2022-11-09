import React, { useState, useEffect } from 'react'
import { Note } from 'components/atoms/Note/Note'
import { randomBackground } from 'helpers/randomBackground'
import { Wrapper } from './Notes.styles'
import { db } from 'firebase-config'
import { collection, getDocs } from 'firebase/firestore'

export const Notes = () => {
	const [notes, setNotes] = useState([])
	const notesCollectionRef = collection(db, 'notes')

	useEffect(() => {
		const getNotes = async () => {
			const data = await getDocs(notesCollectionRef)
			setNotes(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}
		getNotes()
	}, [])

	return (
		<Wrapper>
			{notes.map(note => (
				<Note
					key={note.id}
					title={note.title}
					date={
						note.creationDate.seconds * 1000 +
						note.creationDate.nanoseconds / 1000
					}
					color={`${randomBackground()}`}
				/>
			))}
		</Wrapper>
	)
}
