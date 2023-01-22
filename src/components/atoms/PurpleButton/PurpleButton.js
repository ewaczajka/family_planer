import styled from 'styled-components'

export const PurpleButton = styled.button`
    background: ${({ theme }) => theme.background.purple};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        box-shadow: 0 0 3px #7e59e7;
    }
`
