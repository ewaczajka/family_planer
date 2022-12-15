import React from 'react'
import { UserWrapper } from 'components/atoms/UserWrapper/UserWrapper.styles'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {
    ColorSelector,
    RoundedMargin,
    StyledCloseButton,
    UserNameInput,
    SaveButton,
} from './UserEditor.styles'

export const UserEditor = ({
    id,
    name,
    selectedColor,
    deleteUser,
    handleName,
    handleColor,
    saveUser,
    error,
    logoLetters,
}) => {
    return (
        <UserWrapper>
            <UserLogo color={selectedColor}>
                <span>{logoLetters}</span>
                <ColorSelector
                    type="color"
                    onChange={handleColor}
                    defaultValue={selectedColor}
                />
                <RoundedMargin>
                    <StyledCloseButton onClick={() => deleteUser(id)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </StyledCloseButton>
                </RoundedMargin>
            </UserLogo>
            <UserNameInput
                placeholder="Name..."
                defaultValue={name}
                onChange={handleName}
            />
            {error ? (
                <p>{error}</p>
            ) : (
                <SaveButton onClick={() => saveUser(id)}>
                    save changes
                </SaveButton>
            )}
        </UserWrapper>
    )
}
