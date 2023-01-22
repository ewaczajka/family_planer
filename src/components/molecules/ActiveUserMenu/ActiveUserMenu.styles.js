import styled from 'styled-components'

export const UserMenu = styled.div`
    position: absolute;
    bottom: -5px;
    width: 120px;
    right: 0;
    transform: translate(0, 100%);
    flex-direction: column;
    background: ${({ theme }) => theme.background.beige};
    border-radius: 5px;
    padding: 5px;
    justify-content: right;

    &.hidden {
        display: none;
    }
`

export const MenuItem = styled.div`
    padding: 5px;

    :hover {
        font-weight: bold;
    }
`
