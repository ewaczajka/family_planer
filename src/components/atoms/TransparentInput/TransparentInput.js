import styled from 'styled-components'

export const TransparentInput = styled.input`
    color: ${({ theme, variant }) =>
        variant === 'lightBackground' ? theme.colors.gray : theme.colors.white};
    border: none;
    background-color: transparent;
    outline: none;

    ::placeholder {
        color: ${({ theme, variant }) =>
            variant === 'lightBackground'
                ? theme.colors.lineGray
                : theme.colors.lightGray};
        font-style: italic;
    }
`
