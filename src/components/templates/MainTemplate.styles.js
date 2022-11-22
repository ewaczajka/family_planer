import styled from 'styled-components'

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.darkGray};
	width: 100%;
`

export const AppBody = styled.div`
	height: calc(100vh - 68px);
	padding: 22px;	
`
