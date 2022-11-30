import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebase-config'
import { AuthenticationBox } from 'components/molecules/AuthenticationBox/AuthenticationBox'

export const LogIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const navigate = useNavigate()

	const login = async e => {
		e.preventDefault()
		try {
			const family = await signInWithEmailAndPassword(auth, email, password)
			if (family) {
				navigate('/')
			}
		} catch (error) {
			setError(error.message)
		}
	}

	const handleEmail = e => {
		setEmail(e.target.value)
		setError(null)
	}
	const handlePassword = e => {
		setPassword(e.target.value)
		setError(null)
	}

	return (
		<AuthenticationBox
			title='Log in'
			btnText='Log in'
			handleEmail={handleEmail}
			handlePassword={handlePassword}
			handleSubmit={login}
			error={error}
			changeRedirect='/signup'
			redirectBtnText="Don't have an account? Sign up"
		/>
	)
}
