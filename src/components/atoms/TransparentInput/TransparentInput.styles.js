import styled from 'styled-components'

export const TransparentInput = styled.input`
    color: ${({ theme }) => theme.colors.white};
    border: none;
    background-color: transparent;
    outline: none;

    ::placeholder {
        color: ${({ theme }) => theme.colors.lightGray};
        font-style: italic;
    }
`
