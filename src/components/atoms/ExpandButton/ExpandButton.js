import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { StyledButton } from './ExpandButton.styles'

export const ExpandButton = ({routeDirection}) => {
	return (
		<StyledButton to={routeDirection}>
			<FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
		</StyledButton>
	)
}
