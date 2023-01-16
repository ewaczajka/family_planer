import React from 'react'
import { UserWrapperWithHover, EditButton, UserName } from './UserField.styles'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo'

export const UserField = ({
    id,
    name,
    color,
    editUser,
    logoLetters,
    selectUser,
}) => {
    return (
        <UserWrapperWithHover>
            <EditButton onClick={() => editUser(id, name, color)}>
                Edit
            </EditButton>
            <UserLogo
                color={color}
                size="big"
                as="button"
                onClick={() => selectUser({ id, name, color, logoLetters })}
                logoLetters={logoLetters}
            />
            <UserName>{name}</UserName>
        </UserWrapperWithHover>
    )
}
