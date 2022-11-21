import React, { useEffect, useState } from 'react'
import { StyledNoteEditor, TitleInput, TextInput } from './NoteEditor.styles'
import { db } from 'firebase-config'
import { collection, addDoc, updateDoc, deleteDoc, Timestamp, doc} from 'firebase/firestore'
import { CloseButton } from 'components/atoms/CloseButton/CloseButton'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'
import { randomBackground } from 'helpers/randomBackground'

export const NoteEditor = ({ note, handleClose }) => {
	const notesCollectionRef = collection(db, 'notes')

	const NoteTemplate = {
		title: note.title,
		text: note.text,
		creationDate: note.creationDate,
		color: note.color,
	}

	const [NewNote, setNewNote] = useState(NoteTemplate)
	const [Status, setStatus] = useState('draft')
	const [Error, setError] = useState(false)

	useEffect(() => {
		if (Status === 'final') {
			if (!NoteTemplate.title) {
				NewNote.color = randomBackground()
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
		console.log(NewNote)
	}, [NewNote])

	const deleteNote = async id => {
		const noteDoc = doc(db, 'notes', id)
		await deleteDoc(noteDoc)
		handleClose()
	}

	const handleNote = e => {
		e.preventDefault()
		if ( !NewNote.title && !NewNote.text) {
			handleClose()
		}
		else if (!NewNote.title) {
			setError(true)
			return
		}
		
		setStatus('final')
		
		if (!NewNote.text) { 
			NewNote.text = '' 
		}
		updateCreationDate()
	}

	const updateTitle = e => {
		setNewNote(prevState => ({ ...prevState, title: e.target.value }))
		setError(false)
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
			{Error ? <p>Title is required!</p> : null }
			<DeleteButton
				className='deleteBtn'
				onClick={() => { deleteNote(note.id) }}>
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
