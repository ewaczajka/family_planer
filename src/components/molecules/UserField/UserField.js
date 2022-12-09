import React from 'react'
import { UserWrapperWithHover, EditButton, UserName, UserLogoLink } from './UserField.styles'

export const UserField = ({ id, name, color, editUser, logoLetters, selectUser }) => {
	return (
		<UserWrapperWithHover>
			<EditButton onClick={() => editUser(id, name, color)}>Edit</EditButton>
			<UserLogoLink color={color} as='button' onClick={() => selectUser(id)}>
				<span>{logoLetters}</span>
			</UserLogoLink>
			<UserName>{name}</UserName>
		</UserWrapperWithHover>
	)
}
