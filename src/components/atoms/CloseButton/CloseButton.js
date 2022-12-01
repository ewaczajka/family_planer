import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { StyledButton } from './CloseButton.styles'

export const CloseButton = ({ type }) => {
	return (
		<StyledButton type={type}>
			<FontAwesomeIcon icon={faXmark} />
		</StyledButton>
	)
}
