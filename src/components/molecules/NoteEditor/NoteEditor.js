import React, { useEffect, useState, useCallback } from 'react'
import { StyledNoteEditor, TitleInput, TextInput } from './NoteEditor.styles'
import { db } from 'firebase-config'
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    Timestamp,
    doc,
} from 'firebase/firestore'
import { CloseButton } from 'components/atoms/CloseButton/CloseButton'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'
import { ErrorMsg } from 'components/atoms/ErrorMsg/ErrorMsg'
import { randomBackground } from 'helpers/randomBackground'

export const NoteEditor = ({ note, handleClose }) => {
    const notesCollectionRef = collection(db, 'notes')

    const { title, text = note.text || '', creationDate, color } = note
    const noteTemplate = { title, text, creationDate, color }

    const [newNote, setNewNote] = useState(noteTemplate)
    const [status, setStatus] = useState('draft')
    const [error, setError] = useState(null)

    const createNote = useCallback(async () => {
        await addDoc(notesCollectionRef, newNote)
    }, [status, notesCollectionRef])

    const updateNote = useCallback(
        async id => {
            const noteDoc = doc(db, 'notes', id)
            await updateDoc(noteDoc, { ...newNote })
        },
        [status],
    )

    useEffect(() => {
        if (status === 'final') {
            if (!noteTemplate.title) {
                newNote.color = randomBackground()
                createNote()
            } else if (
                newNote.title !== noteTemplate.title ||
                newNote.text !== noteTemplate.text
            ) {
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
        } else if (!newNote.title) {
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
        setNewNote(prevState => ({
            ...prevState,
            creationDate: Timestamp.now(),
        }))
    }

    return (
        <StyledNoteEditor as="form" onSubmit={e => handleNote(e)}>
            <TitleInput
                defaultValue={note.title}
                placeholder="Note title"
                onChange={updateTitle}
                type="text"
                maxLength="40"
            />
            {error ? <ErrorMsg>{error}</ErrorMsg> : null}
            <DeleteButton
                className="deleteBtn"
                type="button"
                onClick={() => {
                    deleteNote(note.id)
                }}
            >
                Delete note
            </DeleteButton>
            <TextInput
                defaultValue={note.text}
                placeholder="Type here"
                onChange={updateText}
                rows="10"
            />
            <CloseButton type="submit" />
        </StyledNoteEditor>
    )
}
