import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledButton = styled(NavLink)`
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.white};
	border: none;
	background-color: transparent;
	cursor: pointer;
`
