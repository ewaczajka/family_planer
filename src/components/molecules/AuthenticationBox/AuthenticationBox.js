import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './AutenticationBox.styles'
import { Title } from 'components/atoms/Title/Title'

export const AuthenticationBox = ({
	title,
	btnText,
	handleEmail,
	handlePassword,
	handleSubmit,
	error,
	changeRedirect,
	redirectBtnText,
}) => {
	const navigate = useNavigate()

	return (
		<Wrapper>
			<Title>{title}</Title>
			<form onSubmit={e => handleSubmit(e)}>
				<label htmlFor='email'>Your e-mail adress:</label>
				<input
					placeholder='e-mail'
					name='email'
					type='email'
					onChange={e => handleEmail(e)}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					placeholder='password'
					name='password'
					type='password'
					onChange={e => handlePassword(e)}
				/>
				<button type='submit'>{btnText}</button>
			</form>
			{error ? <p>{error}</p> : null}
			<button type='button' onClick={() => navigate(changeRedirect)}>{redirectBtnText}</button>
		</Wrapper>
	)
}
