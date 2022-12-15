import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
    authDomain: 'family-planer-c8661.firebaseapp.com',
    projectId: 'family-planer-c8661',
    storageBucket: 'family-planer-c8661.appspot.com',
    messagingSenderId: '924216955',
    appId: '1:924216955:web:3f534f8ef9bcc4b3473cde',
    measurementId: 'G-V6KFCFD713',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
