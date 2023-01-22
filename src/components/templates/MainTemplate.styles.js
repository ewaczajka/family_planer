import { deviceSize } from 'data/deviceSize'
import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.darkGray};
    width: 100%;
    overflow: hidden;
`

export const AppBody = styled.div`
    height: calc(100vh - 68px);
    width: 100%;
    padding: 22px;
    overflow: hidden;

    @media ${deviceSize.mobile} {
        padding-bottom: calc(22px + 61px);
    }
`
