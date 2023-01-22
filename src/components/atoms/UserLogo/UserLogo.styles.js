import styled from 'styled-components'

export const LogoBackground = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => (size === 'big' ? '140px' : '30px')};
    height: ${({ size }) => (size === 'big' ? '140px' : '30px')};
    border-radius: 50%;
    border: ${({ theme, variant, color }) =>
        variant === 'add'
            ? color === 'dark'
                ? `2px dashed ${theme.colors.gray}`
                : `3px dashed ${theme.colors.lightGray}`
            : 'none'};
    font-size: ${({ size }) => (size === 'big' ? '60px' : '12px')};
    background: ${({ color, variant }) =>
        variant === 'add' ? 'transparent' : color};
    cursor: pointer;
`

export const LogoLetters = styled.span`
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
`
