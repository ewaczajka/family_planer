import React, { useEffect } from "react"
import ReactDOM from 'react-dom'
import { ModalWrapper } from "./Modal.styles"
import { CloseButton } from "components/atoms/CloseButton/CloseButton"


const modalContainer = document.getElementById('modal-container')

const Modal = ({handleClose, children}) => {
    const modalNode = document.createElement('div')

    useEffect(() => {
        modalContainer.appendChild(modalNode)

        return () => {
            modalContainer.removeChild(modalNode)
        }
    }, [modalNode])

    return ReactDOM.createPortal(
        <ModalWrapper>
            <CloseButton handleClose={handleClose} />
            {children}
        </ModalWrapper>, modalNode
    )
}

export default Modal