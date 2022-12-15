import React, { useState } from 'react'
import { SectionWrapper } from './NotesSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'
import { Notes } from 'components/molecules/Notes/Notes'
import { useModal } from 'components/molecules/Modal/useModal'
import { NoteEditor } from 'components/molecules/NoteEditor/NoteEditor'
import { Modal } from 'components/molecules/Modal/Modal'

export const NotesSection = () => {
    const { isOpen, handleClose, handleOpen } = useModal()

    const [currentNote, setCurrentNote] = useState()
    const [searchPhrase, setSearchPhrase] = useState('')

    const handleOpenNoteDetails = data => {
        setCurrentNote(data)
        handleOpen()
    }

    const handleOpenNewNote = () => {
        setCurrentNote({})
        handleOpen()
    }

    const handleChange = e => {
        setSearchPhrase(e.target.value)
    }

    return (
        <SectionWrapper>
            <SectionHeader
                title="Notes"
                searchPlaceholder="Search Notes Title"
                addBtnText="Add note"
                routeDirection="/notes"
                handleOpen={handleOpenNewNote}
                handleChange={handleChange}
            />
            <Notes
                handleOpen={handleOpenNoteDetails}
                searchPhrase={searchPhrase}
            />
            {isOpen ? (
                <Modal handleClose={handleClose}>
                    <NoteEditor note={currentNote} handleClose={handleClose} />
                </Modal>
            ) : null}
        </SectionWrapper>
    )
}
