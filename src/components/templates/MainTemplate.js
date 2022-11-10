import React from 'react'
import styled from 'styled-components'
import Navbar from 'components/organisms/Navbar/Navbar'

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.darkGray};
	width: 100%;
`
const AppBody = styled.div`
	height: calc(100vh - 68px);
	padding: 22px;	
`

export const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navbar />
			<AppBody>
				{children}
			</AppBody>
		</Wrapper>
	)
}
