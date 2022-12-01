import styled from 'styled-components'

export const StyledAddButton = styled.button`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme }) => theme.colors.white};
	border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
	padding: 8px 10px 8px 8px;
	background: ${({ theme }) => theme.background.purple};
	border: none;
	border-radius: 5px;
	cursor: pointer;

	svg {
		margin-right: 8px;
	}
`
