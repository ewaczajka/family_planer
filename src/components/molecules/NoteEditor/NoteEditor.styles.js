import styled from 'styled-components'

export const StyledNoteEditor = styled.div`
    padding: 0 35px;
    display: flex;
    flex-direction: column;
`

export const TitleInput = styled.input`
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
export const TextInput = styled.textarea`
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