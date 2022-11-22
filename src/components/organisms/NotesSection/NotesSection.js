import React, { useState } from 'react'
import { SectionWrapper } from './NotesSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'
import { Notes } from 'components/molecules/Notes/Notes'
import { useModal } from 'components/molecules/Modal/useModal'
import { NoteEditor } from 'components/molecules/NoteEditor/NoteEditor'

export const NotesSection = () => {
	const { Modal, isOpen, handleClose, handleOpen } = useModal()

	const [currentNote, setCurrentNote] = useState([])

	const handleOpenNoteDetails = data => {
		setCurrentNote(data)
		handleOpen()
	}

	const handleOpenNewNote = () => {
		setCurrentNote([])
		handleOpen()
	}

	return (
		<SectionWrapper>
			<SectionHeader
				title='Notes'
				searchPlaceholder='Search Notes Title'
				addBtnText='Add note'
				routeDirection='/notes'
				handleOpen={handleOpenNewNote}
			/>
			<Notes handleOpen={handleOpenNoteDetails} />
			{isOpen ? (
				<Modal handleClose={handleClose}>
					<NoteEditor note={currentNote} handleClose={handleClose} />
				</Modal>
			) : null}
		</SectionWrapper>
	)
}
