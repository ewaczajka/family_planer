import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { StyledAddButton } from './AddButton.styles'

export const AddButton = ({ addBtn }) => {
	return (
		<>
			{addBtn !== 'none' ? (
				<StyledAddButton>
					<FontAwesomeIcon icon={faCirclePlus} />
					{addBtn}
				</StyledAddButton>
			) : null}
		</>
	)
}

AddButton.propTypes = {
    addBtn: PropTypes.string
}