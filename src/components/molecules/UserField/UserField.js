import React from 'react'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo.styles'
import { UserWrapperWithHover, EditButton, UserName } from './UserField.styles'

export const UserField = ({name, color}) => {
	return (
		<UserWrapperWithHover>
			<EditButton>Edit</EditButton>
            <UserLogo color={color}>
                <span></span>
            </UserLogo>
            <UserName>{name}</UserName>
		</UserWrapperWithHover>
	)
}
