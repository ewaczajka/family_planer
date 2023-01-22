import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { deviceSize } from 'data/deviceSize'

export const Wrapper = styled.div`
    height: 68px;
    background: ${({ theme }) => theme.colors.gray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 22px;

    > :last-child {
        flex-shrink: 0;
        position: absolute;
        right: 22px;
    }
`

export const Logo = styled.div`
    position: absolute;
    left: 22px;
    align-items: center;
    display: flex;

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: bold;

        @media ${deviceSize.desktop} {
            display: none;
        }
    }

    img {
        width: 40px;
        margin-right: 15px;
    }
`

export const Navigation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media ${deviceSize.mobile} {
        justify-content: stretch;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 0 22px;
        width: 100%;
        height: 61px;
        align-items: center;
        background: ${({ theme }) => theme.colors.gray};
        border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
    }
`

export const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    text-decoration: none;
    margin: 0 3%;
    position: relative;

    svg {
        display: none;
    }

    &.active {
        color: ${({ theme }) => theme.colors.white};

        &::after {
            opacity: 1;
        }
    }

    &:after {
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -24px;
        left: 0;
        background-color: ${({ theme }) => theme.colors.white};
    }

    @media ${deviceSize.mobile} {
        flex-grow: 1;
        width: 25%;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSize.xs};
        font-weight: normal;
        text-transform: uppercase;

        svg {
            font-size: 22px;
            display: block;
            margin-bottom: 5px;
        }

        &:after {
            top: -10px;
            left: 0;
            background-color: ${({ theme }) => theme.colors.white};
        }
    }
`
