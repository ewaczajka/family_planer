import styled from 'styled-components'
import { TransparentInput } from 'components/atoms/TransparentInput/TransparentInput.styles'
import { PurpleButton } from 'components/atoms/PurpleButton/PurpleButton'

export const Wrapper = styled.div`
    max-width: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10vh auto;
    height: 100%;
    overflow-y: scroll;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px 0 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`

export const StyledInput = styled(TransparentInput)`
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 12px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.lineGray};
    margin-bottom: 24px;

    :focus {
        border-color: ${({ theme }) => theme.colors.purple};
        box-shadow: 0 0 3px #7e59e7;
    }
`

export const StyledLabel = styled.label`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-bottom: 4px;
`

export const StyledSubmitButton = styled(PurpleButton)`
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 12px;
    margin-top: 6px;
    text-decoration: none;
`

export const StyledRedirectLink = styled.a`
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-top: 20px;

    :hover {
        color: ${({ theme }) => theme.colors.white};
    }
`

export const StyledText = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-top: 20px;
    margin: 20px auto;
    text-align: center;
`
