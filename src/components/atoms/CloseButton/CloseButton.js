import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { StyledButton } from "./CloseButton.styles"

export const CloseButton = ({onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            <FontAwesomeIcon icon={faXmark} />
        </StyledButton>
    )
}