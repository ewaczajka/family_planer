import React, { useState, useEffect } from 'react'
import { Note } from 'components/atoms/Note/Note'
import { Wrapper } from './Notes.styles'
import { db } from 'firebase-config'
import {
    collection,
    query,
    orderBy,
    getDocs,
    onSnapshot,
} from 'firebase/firestore'

export const Notes = ({ handleOpen, searchPhrase }) => {
    const [notes, setNotes] = useState([])
    const notesCollectionRef = collection(db, 'notes')
    const q = query(notesCollectionRef, orderBy('creationDate', 'desc'))

    useEffect(() => {
        const getNotes = async () => {
            const data = await getDocs(q)
            setNotes(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        onSnapshot(notesCollectionRef, () => {
            getNotes()
        })
    }, [])

    return (
        <Wrapper>
            {notes.map(note =>
                note.title
                    .toLowerCase()
                    .includes(searchPhrase.toLowerCase()) ? (
                    <Note
                        key={note.id}
                        title={note.title}
                        text={note.text}
                        date={note.creationDate.seconds * 1000}
                        color={note.color}
                        onClick={() => handleOpen(note)}
                    />
                ) : null,
            )}
        </Wrapper>
    )
}
