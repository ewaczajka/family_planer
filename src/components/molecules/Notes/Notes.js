import React, { useEffect } from 'react'
import { Note } from 'components/atoms/Note/Note'
import { Wrapper } from './Notes.styles'
import { NotesQueries } from './NotesQueries'

export const Notes = ({ handleOpen, searchPhrase }) => {
    const { notes, getNotesQuery } = NotesQueries()

    useEffect(() => {
        getNotesQuery()
    }, [])

    return (
        <Wrapper>
            {notes.map(note =>
                note.title
                    .toLowerCase()
                    .includes(searchPhrase.toLowerCase()) ? (
                    <Note
                        key={note.id}
                        title={note.title}
                        text={note.text}
                        date={note.creationDate.seconds * 1000}
                        color={note.color}
                        onClick={() => handleOpen(note)}
                    />
                ) : null,
            )}
        </Wrapper>
    )
}
