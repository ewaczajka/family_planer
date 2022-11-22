import styled from 'styled-components'

export const ErrorMsg = styled.p`
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-style: italic;
    font-weight: bold;
`
