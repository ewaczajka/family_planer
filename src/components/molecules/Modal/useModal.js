import { useState } from 'react'

export const useModal = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState)

    const handleClose = () => setIsOpen(false)
    const handleOpen = () => setIsOpen(true)

    return {
        isOpen,
        handleClose,
        handleOpen,
    }
}
