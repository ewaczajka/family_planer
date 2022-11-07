import React from 'react'
import styled from 'styled-components'
import Navbar from 'components/organisms/Navbar/Navbar'

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.darkGray};
	width: 100%;
`

export const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navbar />
			{children}
		</Wrapper>
	)
}
