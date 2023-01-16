import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
    height: 68px;
    background: ${({ theme }) => theme.colors.gray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 22px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    img {
        width: 40px;
        margin-right: 15px;
    }
`

export const Navigation = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    text-decoration: none;
    margin: 0 20px;
    position: relative;

    &.active {
        color: ${({ theme }) => theme.colors.white};
        &::after {
            opacity: 1;
        }
    }

    &::after {
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
`
