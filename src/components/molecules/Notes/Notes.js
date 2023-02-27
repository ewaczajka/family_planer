import React, { useEffect } from 'react'
import { Note } from 'components/atoms/Note/Note'
import { Wrapper } from './Notes.styles'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { NotesOrderRules } from 'data/orderRules'

export const Notes = ({ handleOpen, searchPhrase }) => {
    const { documents, getDocsQuery } = useCollectionQueries(
        'notes',
        NotesOrderRules,
    )

    useEffect(() => {
        getDocsQuery()
    }, [])

    return (
        <Wrapper>
            {documents.map(note =>
                note.title
                    .toLowerCase()
                    .includes(searchPhrase.toLowerCase()) ? (
                    <Note
                        key={note.id}
                        title={note.title}
                        text={note.text}
                        date={note.modificationDate.seconds * 1000}
                        color={note.color}
                        onClick={() => handleOpen(note)}
                    />
                ) : null,
            )}
        </Wrapper>
    )
}
