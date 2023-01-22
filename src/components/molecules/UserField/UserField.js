import React from 'react'
import { UserWrapperWithHover, EditButton, UserName } from './UserField.styles'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo'

export const UserField = ({ user, editUser, selectUser }) => {
    return (
        <UserWrapperWithHover>
            <EditButton onClick={() => editUser(user)}>Edit</EditButton>
            <UserLogo
                color={user.color}
                size="big"
                as="button"
                onClick={() => selectUser(user)}
                logoLetters={user.logoLetters}
            />
            <UserName>{user.name}</UserName>
        </UserWrapperWithHover>
    )
}
