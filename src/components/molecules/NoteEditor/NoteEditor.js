import React, { useEffect, useState } from 'react'
import { StyledNoteEditor, TitleInput, TextInput } from './NoteEditor.styles'
import { db } from 'firebase-config'
import { collection, addDoc, updateDoc, deleteDoc, Timestamp, doc} from 'firebase/firestore'
import { CloseButton } from 'components/atoms/CloseButton/CloseButton'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'

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
			if (NoteTemplate.title === undefined) {
				const createNote = async () => {
					await addDoc(notesCollectionRef, NewNote)
				}
				createNote()
			} else if ( NewNote.title !== NoteTemplate.title || NewNote.text !== NoteTemplate.text ) {
				const updateNote = async id => {
					const noteDoc = doc(db, 'notes', id)
					await updateDoc(noteDoc, { ...NewNote })
				}
				updateNote(note.id)
			}
			handleClose()
		}
	}, [NewNote])

	const deleteNote = async id => {
		const noteDoc = doc(db, 'notes', id)
		await deleteDoc(noteDoc)
		handleClose()
	}

	const handleNote = e => {
		e.preventDefault()
		setStatus('final')
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
		<StyledNoteEditor as='form' onSubmit={e => handleNote(e)}>
			<TitleInput
				defaultValue={note.title}
				placeholder='Note title'
				onChange={e => updateTitle(e)}
				required
			/>
			<DeleteButton
				className='deleteBtn'
				onClick={() => { deleteNote(note.id) }}>
				Delete note
			</DeleteButton>
			<TextInput
				defaultValue={note.text}
				placeholder='Type here'
				onChange={e => updateText(e)}
			/>
			<CloseButton type='submit' />
		</StyledNoteEditor>
	)
}
