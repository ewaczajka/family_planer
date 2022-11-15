import styled from 'styled-components'

export const StyledButton = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.colors.darkGray};
	border: none;
	background-color: transparent;
	cursor: pointer;
`
