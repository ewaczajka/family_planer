import styled from 'styled-components'

export const Title = styled.h1`
	display: inline-block;
	font-size: ${({ theme }) => theme.fontSize.l};
	color: ${({ theme }) => theme.colors.white};
	padding-right: 15px;
	margin: 1px 0;
	border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
`
