import styled from 'styled-components'

export const LogoBackground = styled.div`
    width: ${({ size }) => (size === 'big' ? '140px' : '30px')};
    height: ${({ size }) => (size === 'big' ? '140px' : '30px')};
    border-radius: 50%;
    border: ${({ theme, variant }) =>
        variant === 'add' ? `3px dashed ${theme.colors.lightGray}` : 'none'};
    font-size: ${({ size }) => (size === 'big' ? '60px' : '12px')};
    position: relative;
    background: ${({ color, variant }) =>
        variant === 'add' ? 'transparent' : color};
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover {
        > div:last-child {
            display: flex;
            opacity: 100%;
        }
    }
`

export const LogoLetters = styled.span`
    color: ${({ theme }) => theme.colors.darkGray};
`
