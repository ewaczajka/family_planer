import React from 'react'
import { UserWrapper } from 'components/atoms/UserWrapper/UserWrapper.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { BigPlus, AddBtnText } from './UserAddField.styles'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo'

export const UserAddField = ({ createNewUser }) => {
    return (
        <UserWrapper>
            <UserLogo
                size="big"
                variant="add"
                as="button"
                onClick={createNewUser}
            >
                <BigPlus>
                    <FontAwesomeIcon icon={faPlus} />
                </BigPlus>
                <AddBtnText>Add member</AddBtnText>
            </UserLogo>
        </UserWrapper>
    )
}
