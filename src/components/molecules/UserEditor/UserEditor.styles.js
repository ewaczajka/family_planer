import styled from 'styled-components'
import { TransparentInput } from 'components/atoms/TransparentInput/TransparentInput.styles'

export const UserNameInput = styled(TransparentInput)`
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    text-align: center;
    margin: 15px;
    font-weight: bold;

    ::placeholder {
        font-weight: normal;
    }
`

export const ColorSelector = styled.input`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    opacity: 0%;
    cursor: pointer;
`

export const RoundedMargin = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-items: center;
    right: -1px;
    top: -6px;
    background: ${({ theme }) => theme.colors.darkGray};
    z-index: 1;
    pointer-events: none;
`

export const StyledCloseButton = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-size: ${({ theme }) => theme.fontSize.xs};
    background-color: ${({ theme }) => theme.colors.lightGray};
    pointer-events: auto;
    cursor: pointer;
    border: none;
    margin: auto;
`

export const SaveButton = styled.button`
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.white};
    border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
    padding: 8px 10px 8px 8px;
    background: ${({ theme }) => theme.background.purple};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
