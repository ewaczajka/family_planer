import React from 'react'
import styled from 'styled-components'

const StyledNoteEditor = styled.div`
    padding: 0 35px;
    display: flex;
    flex-direction: column;
`

const TitleInput = styled.input`
    // width: 100%;
    height: 105px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lineGray};
    font-size: ${({theme}) => theme.fontSize.xl};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGray};
	background-color: transparent;
	outline: none;

	::placeholder {
		color: ${({ theme }) => theme.colors.gray};
		font-style: italic;
	}
`
const TextInput = styled.textarea`
    border: none;
    margin-top: 15px;
    font-size: ${({theme}) => theme.fontSize.m};
    line-height: 28px;
    color: ${({ theme }) => theme.colors.darkGray};
    background-color: transparent;
    outline: none;

    ::placeholder {
        color: ${({ theme }) => theme.colors.gray};
        font-style: italic;
}
`

export const NoteEditor = ({note}) => {
    return (
        <StyledNoteEditor>
            <TitleInput defaultValue={note.title} placeholder='Note title'/>
            <TextInput defaultValue={note.text} placeholder='Type here' />
        </StyledNoteEditor>
    )
}