import styled from 'styled-components'

export const PurpleButton = styled.button`
    background: ${({ theme, variant }) =>
        variant === 'secondary' ? 'transparent' : theme.background.purple};
    color: ${({ theme }) => theme.colors.white};
    outline: ${({ theme, variant }) =>
        variant === 'secondary' ? `2px solid ${theme.colors.purple}` : 'none'};
    outline-offset: -2px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        box-shadow: 0 0 3px #7e59e7;
    }
`
