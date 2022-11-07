import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 68px;
    background: ${({ theme }) => theme.colors.gray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`

export const Logo = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.l};
    font-weight: bold;
    img {
        width: 40px;
        margin: 0 15px 0 22px;
    }
`
export const Navigation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const StyledLink = styled.span`
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({theme}) => theme.fontSize.m};
    font-weight: bold;
    margin: 0 2%;
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

