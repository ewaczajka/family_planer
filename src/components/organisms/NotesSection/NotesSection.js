import React, { useState } from 'react'
import { SectionWrapper } from './NotesSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'
import { Notes } from 'components/molecules/Notes/Notes'
import useModal from 'components/molecules/Modal/useModal'
import { NoteEditor } from 'components/molecules/NoteEditor/NoteEditor'

const NotesSection = () => {
	const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal()

	const [currentNote, setCurrentNote] = useState([])

	const handleOpenNoteDetails = data => {
		handleOpenModal()
		setCurrentNote(data)
	}

	const handleOpenNewNote = () => {
		handleOpenModal()
		setCurrentNote([])
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
				<Modal handleClose={handleCloseModal}>
					<NoteEditor note={currentNote} />
				</Modal>
			) : null}
		</SectionWrapper>
	)
}

export default NotesSection
