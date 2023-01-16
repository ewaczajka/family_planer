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

    let q
    if (orderRules.length === 2) {
        q = query(
            docsCollectionRef,
            where('familyID', '==', activeFamily),
            orderBy(orderRules[0].field, orderRules[0].direction),
            orderBy(orderRules[1].field, orderRules[1].direction),
        )
    } else if (orderRules.length === 1) {
        q = query(
            docsCollectionRef,
            where('familyID', '==', activeFamily),
            orderBy(orderRules[0].field, orderRules[0].direction),
        )
    }

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
