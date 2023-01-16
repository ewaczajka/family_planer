import styled from 'styled-components'

export const UserMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: right;
    width: 130px;
    opacity: 0%;
    border-radius: 3px;

    button {
        padding: 5px;
        background: ${({ theme }) => theme.background.beige};
        border: none;
        border-radius: 0;

        :hover {
            font-weight: bold;
        }
    }
`
