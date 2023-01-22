import React, { useEffect, useState, useContext } from 'react'
import { StyledNoteEditor, TitleInput, TextInput } from './NoteEditor.styles'
import { Timestamp } from 'firebase/firestore'
import { CloseButton } from 'components/atoms/CloseButton/CloseButton'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'
import { ErrorMsg } from 'components/atoms/ErrorMsg/ErrorMsg'
import { randomBackground } from 'helpers/randomBackground'
import { FamilyContext } from 'providers/CurrentFamilyProvider'
import { UserContext } from 'providers/ActiveUserProvider'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { NotesOrderRules } from 'data/orderRules'

export const NoteEditor = ({ note, handleClose }) => {
    const { activeFamily } = useContext(FamilyContext)
    const { activeUser } = useContext(UserContext)

    const { deleteDocQuery, updateDocQuery, createDocQuery } = useCollectionQueries('notes', NotesOrderRules)

    const {
        title,
        text = note.text || '',
        creationDate,
        modificationDate,
        createdBy,
        modifiedBy,
        color,
        familyID = activeFamily,
    } = note

    const noteTemplate = {
        title,
        text,
        creationDate,
        modificationDate,
        createdBy,
        modifiedBy,
        color,
        familyID,
    }

    const [newNote, setNewNote] = useState(noteTemplate)
    const [status, setStatus] = useState('draft')
    const [error, setError] = useState(null)

    useEffect(() => {
        if (status === 'final') {
            if (!note.id) {
                newNote.color = randomBackground()
                createDocQuery(newNote)
            } else if (
                newNote.title !== noteTemplate.title ||
                newNote.text !== noteTemplate.text
            ) {
                updateDocQuery(note.id, newNote)
            }
            handleClose()
        }
    }, [status])

    const deleteNote = id => {
        if (id) {
            deleteDocQuery(id)
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
        updateModificationData()
    }

    const updateTitle = e => {
        setNewNote(prevState => ({ ...prevState, title: e.target.value }))
        setError(null)
    }

    const updateText = e => {
        setNewNote(prevState => ({ ...prevState, text: e.target.value }))
    }

    const updateModificationData = () => {
        if (note.id) {
            setNewNote(prevState => ({
                ...prevState,
                modificationDate: Timestamp.now(),
                modifiedBy: activeUser,
            }))
        } else {
            setNewNote(prevState => ({
                ...prevState,
                creationDate: Timestamp.now(),
                modificationDate: Timestamp.now(),
                createdBy: activeUser,
                modifiedBy: activeUser,
            }))
        }
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
