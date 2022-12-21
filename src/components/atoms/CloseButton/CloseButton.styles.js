import styled from 'styled-components'

export const StyledButton = styled.button`
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGray};
    border: none;
    background-color: transparent;
    cursor: pointer;
`
