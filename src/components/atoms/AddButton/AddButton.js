import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { StyledAddButton } from './AddButton.styles'

export const AddButton = ({ addBtnText, handleOpen }) => {
    return (
        <>
            {addBtnText !== 'none' ? (
                <StyledAddButton onClick={handleOpen}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    {addBtnText}
                </StyledAddButton>
            ) : null}
        </>
    )
}

AddButton.propTypes = {
    addBtnText: PropTypes.string,
    handleOpen: PropTypes.func,
}
