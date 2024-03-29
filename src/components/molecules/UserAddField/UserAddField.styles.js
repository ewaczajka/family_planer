import styled from 'styled-components'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo'

export const AddBtnLogo = styled(UserLogo)`
    background-color: transparent;
    border: 3px dashed ${({ theme }) => theme.colors.lightGray};
    flex-direction: column;
`
export const BigPlus = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.lightGray};
`

export const AddBtnText = styled.span`
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.lightGray};
`
