import styled from 'styled-components'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo.styles'

export const AddBtnLogo = styled(UserLogo)`
	background-color: transparent;
	border: 3px dashed ${({ theme }) => theme.colors.lightGray};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const BigPlus = styled.div`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.lightGray};
`

export const AddBtnText = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme }) => theme.colors.lightGray};
`
