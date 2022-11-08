import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { StyledButton } from './ExpandButton.styles'

export const ExpandButton = () => {
	return (
		<StyledButton>
			<FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
		</StyledButton>
	)
}
