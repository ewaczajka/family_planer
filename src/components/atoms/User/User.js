import React from 'react'
import { Wrapper, ProfileLogo, UserName, Buttons } from './User.styles'
import { DeleteButton } from '../DeleteButton/DeleteButton'

export const User = ({ name, color, editUser, deleteUser }) => {
	const firstLetters = name.match(/\b(\w)/g)
	const logoLetters = firstLetters.join('').toUpperCase()

	return (
		<Wrapper>
			<Buttons className='buttons'>
				<DeleteButton onClick={editUser}>Edit</DeleteButton>
				<DeleteButton onClick={deleteUser}>Delete</DeleteButton>
			</Buttons>
			<ProfileLogo color={color}>{logoLetters}</ProfileLogo>
			<UserName>{name}</UserName>
		</Wrapper>
	)
}
