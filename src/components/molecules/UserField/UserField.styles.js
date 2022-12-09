import styled from 'styled-components'
import { UserWrapper } from 'components/atoms/UserWrapper/UserWrapper.styles'

export const EditButton = styled.button`
	color: ${({ theme }) => theme.colors.red};
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: bold;
	border: none;
	background-color: transparent;
	cursor: pointer;
	position: absolute;
	top: -25px;
	opacity: 0%;
`

export const UserWrapperWithHover = styled(UserWrapper)`
	:hover button {
		opacity: 100%;
	}
`

export const UserName = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.l};
	font-weight: bold;
	margin: 15px;
`
