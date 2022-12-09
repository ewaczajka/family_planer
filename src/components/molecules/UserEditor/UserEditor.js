import React from 'react'
import { UserWrapper } from 'components/atoms/UserWrapper/UserWrapper.styles'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo.styles'
import { AddButton } from 'components/atoms/AddButton/AddButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {
	ColorSelector,
	RoundedMargin,
	StyledCloseButton,
	UserNameInput,
} from './UserEditor.styles'

export const UserEditor = ({ editing, creating, name, color }) => {
	return (
		<UserWrapper>
			<UserLogo color={color}>
				<span></span>
				<ColorSelector type='color' />
				<RoundedMargin>
					<StyledCloseButton>
						<FontAwesomeIcon icon={faXmark} />
					</StyledCloseButton>
				</RoundedMargin>
			</UserLogo>
			<UserNameInput placeholder='name...' defaultValue={name} />
			<AddButton addBtnText='save changes' />
		</UserWrapper>
	)
}
