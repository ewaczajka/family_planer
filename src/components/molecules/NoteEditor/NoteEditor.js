import React from 'react'
import styled from 'styled-components'

const StyledNoteEditor = styled.div`
    position: fixed;
    height: calc(100vh - 20px);
    width: 840px;
    left: 50%;
    transform: translate(-50%, 0);
`

const TitleInput = styled.input`

`
const TextInput = styled.input`

`

export const NoteEditor = () => {
    return (
        <StyledNoteEditor>
            <TitleInput placeholder='Note title'/>
            <TextInput placeholder='Type here'/>
        </StyledNoteEditor>
    )
}