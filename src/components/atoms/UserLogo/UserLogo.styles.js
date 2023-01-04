import styled from 'styled-components'

export const LogoBackground = styled.div`
    width: ${({ size }) => (size === 'big' ? '140px' : '30px')};
    height: ${({ size }) => (size === 'big' ? '140px' : '30px')};
    border-radius: 50%;
    border: ${({ theme, variant }) =>
        variant === 'add' ? `3px dashed ${theme.colors.lightGray}` : 'none'};
    font-size: 60px;
    position: relative;
    background: ${({ color, variant }) =>
        variant === 'add' ? 'transparent' : color};
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LogoLetters = styled.span`
    color: ${({ theme }) => theme.colors.darkGray};
`
