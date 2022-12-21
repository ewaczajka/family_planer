import styled from 'styled-components'

export const DeleteButton = styled.button`
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    border: none;
    background-color: transparent;
    cursor: pointer;
`
