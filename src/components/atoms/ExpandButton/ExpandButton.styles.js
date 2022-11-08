import styled from 'styled-components'

export const StyledButton = styled.button`
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.white};
	border: none;
	background-color: transparent;
	margin-left: 20px;
	cursor: pointer;
`
