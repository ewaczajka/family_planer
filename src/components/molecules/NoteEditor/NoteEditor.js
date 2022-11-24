import React, { useEffect, useState } from 'react'
import { StyledNoteEditor, TitleInput, TextInput } from './NoteEditor.styles'
import { db } from 'firebase-config'
import { collection, addDoc, updateDoc, deleteDoc, Timestamp, doc} from 'firebase/firestore'
import { CloseButton } from 'components/atoms/CloseButton/CloseButton'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'
import { ErrorMsg } from 'components/atoms/ErrorMsg/ErrorMsg'
import { randomBackground } from 'helpers/randomBackground'

export const NoteEditor = ({ note, handleClose }) => {
	const notesCollectionRef = collection(db, 'notes')

	const NoteTemplate = {
		title: note.title | '',
		text: note.text | '',
		creationDate: note.creationDate,
		color: note.color,
	}

	const [newNote, setNewNote] = useState(NoteTemplate)
	const [status, setStatus] = useState('draft')
	const [error, setError] = useState(null)

	useEffect(() => {
		if (status === 'final') {
			if (!NoteTemplate.title) {
				newNote.color = randomBackground()
				const createNote = async () => {
					await addDoc(notesCollectionRef, newNote)
				}
				createNote()
			} else if ( newNote.title !== NoteTemplate.title || newNote.text !== NoteTemplate.text ) {
				const updateNote = async id => {
					const noteDoc = doc(db, 'notes', id)
					await updateDoc(noteDoc, { ...newNote })
				}
				updateNote(note.id)
			}
			handleClose()
		}
	}, [status])

	const deleteNote = async id => {
		if (id) {
			const noteDoc = doc(db, 'notes', id)
			await deleteDoc(noteDoc)
		}
		handleClose()
	}

	const handleNote = e => {
		e.preventDefault()
		if (!newNote.title && !newNote.text) {
			handleClose()
		}
		else if (!newNote.title) {
			return setError('Title is required!')
		}
		setStatus('final')
		updateCreationDate()
	}

	const updateTitle = e => {
		setNewNote(prevState => ({ ...prevState, title: e.target.value }))
		setError(null)
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
				type='text'
				maxLength='40'
			/>
			{error ? <ErrorMsg>{error}</ErrorMsg> : null}
			<DeleteButton
				className='deleteBtn'
				type='button'
				onClick={() => {
					deleteNote(note.id)
				}}>
				Delete note
			</DeleteButton>
			<TextInput
				defaultValue={note.text}
				placeholder='Type here'
				onChange={e => updateText(e)}
				rows='10'
			/>
			<CloseButton type='submit' />
		</StyledNoteEditor>
	)
}
