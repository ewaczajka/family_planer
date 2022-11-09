import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 140px;
	height: 140px;
	border-radius: 15px;
	background: ${({ theme, color }) => theme.background[color]};
	margin: 0 10px 20px;
	padding: 15px 17px 13px 15px;
	display: flex;
	flex-direction: column;
`

export const Title = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.darkGray};
	font-weight: normal;
	flex: 1 1 0;
`

export const Date = styled.p`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme }) => theme.colors.gray};
	opacity: 0.5;
`
