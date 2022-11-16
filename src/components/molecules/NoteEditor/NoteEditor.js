import React, { useEffect, useState } from 'react'
import { StyledNoteEditor, TitleInput, TextInput } from './NoteEditor.styles'
import { db } from 'firebase-config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { CloseButton } from 'components/atoms/CloseButton/CloseButton'

export const NoteEditor = ({ note, handleClose }) => {
	const notesCollectionRef = collection(db, 'notes')

	const NoteTemplate = {
		title: note.title,
		text: note.text,
		creationDate: note.creationDate,
	}

	const [NewNote, setNewNote] = useState(NoteTemplate)
	const [status, setStatus] = useState('draft')

	useEffect(() => {
		if (status === 'final') {
			addDoc(notesCollectionRef, NewNote)
			handleClose()
		}
	}, [NewNote])

	const createNote = e => {
		setStatus('final')
		e.preventDefault()
		updateCreationDate()
	}

	const updateTitle = e => {
		setNewNote(prevState => ({ ...prevState, title: e.target.value }))
	}

	const updateText = e => {
		setNewNote(prevState => ({ ...prevState, text: e.target.value }))
	}

	const updateCreationDate = () => {
		setNewNote(prevState => ({ ...prevState, creationDate: Timestamp.now() }))
	}

	return (
		<StyledNoteEditor>
			<TitleInput
				defaultValue={note.title}
				placeholder='Note title'
				onChange={e => updateTitle(e)}
			/>
			<TextInput
				defaultValue={note.text}
				placeholder='Type here'
				onChange={e => updateText(e)}
			/>
			<CloseButton onClick={e => createNote(e)} />
		</StyledNoteEditor>
	)
}
