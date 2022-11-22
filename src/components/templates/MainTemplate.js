import React from 'react'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { Wrapper, AppBody } from './MainTemplate.styles'

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
