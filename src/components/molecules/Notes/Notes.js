import React from 'react'
import { Note } from 'components/atoms/Note/Note'
import { NotesExamples } from 'data/NotesExamples'
import { randomBackground } from 'helpers/randomBackground'
import { Wrapper } from './Notes.styles'

export const Notes = () => {
	return (
		<Wrapper>
			{NotesExamples.map(note => (
				<Note
					key={NotesExamples.indexOf(note)}
					title={note.Title}
					date={note.ModificatedAgo}
					color={`${randomBackground()}`}
				/>
			))}
		</Wrapper>
	)
}
