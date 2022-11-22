import { useState } from 'react'
import { Modal } from './Modal'

export const useModal = (initialState = false) => {
	const [isOpen, setIsOpen] = useState(initialState)

	const handleClose = () => setIsOpen(false)
	const handleOpen = () => setIsOpen(true)

	return {
		Modal,
		isOpen,
		handleClose,
		handleOpen,
	}
}
