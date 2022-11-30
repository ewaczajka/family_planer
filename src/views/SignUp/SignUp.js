import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebase-config'
import { AuthenticationBox } from 'components/molecules/AuthenticationBox/AuthenticationBox'

export const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const navigate = useNavigate()

	const signup = async e => {
		e.preventDefault()
		try {
			const family = await createUserWithEmailAndPassword(auth, email, password)
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
			title='Create new family'
			btnText='Sign up'
			handleEmail={handleEmail}
			handlePassword={handlePassword}
			handleSubmit={signup}
			error={error}
			changeRedirect='/login'
			redirectBtnText='Have an account? Log in'
		/>
	)
}
