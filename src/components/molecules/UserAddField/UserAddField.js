import React from 'react'
import { UserWrapper } from 'components/atoms/UserWrapper/UserWrapper.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { AddBtnLogo, BigPlus, AddBtnText } from './UserAddField.styles'

export const UserAddField = ({ createNewUser }) => {
	return (
		<UserWrapper>
			<AddBtnLogo as='button' onClick={createNewUser}>
				<BigPlus>
					<FontAwesomeIcon icon={faPlus} />
				</BigPlus>
				<AddBtnText>Add member</AddBtnText>
			</AddBtnLogo>
		</UserWrapper>
	)
}
