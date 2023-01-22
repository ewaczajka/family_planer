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

export const useCollectionQueries = (collectionName, orderRules) => {
    const { activeFamily } = useContext(FamilyContext)

    const [documents, setDocuments] = useState([])
    const docsCollectionRef = collection(db, collectionName)

    const q = query(
        docsCollectionRef,
        where('familyID', '==', activeFamily),
        ...orderRules.map(rule => orderBy(rule.field, rule.direction)),
    )

    const getDocuments = async () => {
        const data = await getDocs(q)
        setDocuments(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    const getDocsQuery = () => {
        onSnapshot(docsCollectionRef, () => {
            getDocuments()
        })
    }

    const createDocQuery = async newDoc => {
        await addDoc(docsCollectionRef, newDoc)
    }

    const updateDocQuery = async (id, newDoc) => {
        const document = doc(db, collectionName, id)
        await updateDoc(document, { ...newDoc })
    }

    const deleteDocQuery = async id => {
        const document = doc(db, collectionName, id)
        await deleteDoc(document)
    }

    return {
        documents,
        getDocsQuery,
        deleteDocQuery,
        updateDocQuery,
        createDocQuery,
    }
}
