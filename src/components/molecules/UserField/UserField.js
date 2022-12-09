import React from 'react'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo.styles'
import { UserWrapperWithHover, EditButton, UserName } from './UserField.styles'

export const UserField = ({ id, name, color, editUser, logoLetters }) => {
	return (
		<UserWrapperWithHover>
			<EditButton onClick={() => editUser(id, name, color)}>Edit</EditButton>
			<UserLogo color={color}>
				<span>{logoLetters}</span>
			</UserLogo>
			<UserName>{name}</UserName>
		</UserWrapperWithHover>
	)
}
