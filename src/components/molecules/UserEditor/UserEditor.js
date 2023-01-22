import React from 'react'
import { UserWrapper } from 'components/atoms/UserWrapper/UserWrapper.styles'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {
    ColorSelector,
    RoundedMargin,
    StyledCloseButton,
    UserNameInput,
    SaveButton,
    ErrorMsg,
} from './UserEditor.styles'

export const UserEditor = ({
    id,
    name,
    selectedColor,
    deleteUser,
    handleChangeName,
    handleChangeColor,
    saveUser,
    error,
    logoLetters,
}) => {
    return (
        <UserWrapper>
            <UserLogo
                size="big"
                color={selectedColor}
                logoLetters={logoLetters}
            >
                <ColorSelector
                    type="color"
                    onChange={handleChangeColor}
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
                onChange={handleChangeName}
                maxLength="16"
            />
            {error ? (
                <ErrorMsg>{error}</ErrorMsg>
            ) : (
                <SaveButton onClick={() => saveUser(id)}>
                    save changes
                </SaveButton>
            )}
        </UserWrapper>
    )
}
