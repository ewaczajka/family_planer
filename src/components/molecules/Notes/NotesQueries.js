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
    orderBy,
} from 'firebase/firestore'
import { FamilyContext } from 'providers/CurrentFamilyProvider'

export const NotesQueries = () => {
    const { activeFamily } = useContext(FamilyContext)

    const [notes, setNotes] = useState([])
    const notesCollectionRef = collection(db, 'notes')
    const q = query(
        notesCollectionRef,
        where('familyID', '==', activeFamily),
        orderBy('modificationDate', 'desc'),
    )

    const getNotes = async () => {
        const data = await getDocs(q)
        setNotes(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    const getNotesQuery = () => {
        onSnapshot(notesCollectionRef, () => {
            getNotes()
        })
    }

    const createNoteQuery = async newNote => {
        await addDoc(notesCollectionRef, newNote)
    }

    const updateNoteQuery = async (id, newNote) => {
        const noteDoc = doc(db, 'notes', id)
        await updateDoc(noteDoc, { ...newNote })
    }

    const deleteNoteQuery = async id => {
        const noteDoc = doc(db, 'notes', id)
        await deleteDoc(noteDoc)
    }

    return {
        notes,
        getNotesQuery,
        deleteNoteQuery,
        updateNoteQuery,
        createNoteQuery,
    }
}
