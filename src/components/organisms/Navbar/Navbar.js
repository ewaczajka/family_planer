import React from 'react'
import logoIcon from 'assets/logo.png'
import { Wrapper, Logo, Navigation, StyledLink } from './Navbar.styles'

export const Navbar = () => {
	return (
		<Wrapper>
			<Logo>
				<img src={logoIcon} alt='Logo' />
				FamilyPlaner
			</Logo>
			<Navigation>
				<StyledLink to='/' end>Dashboard</StyledLink>
				<StyledLink to='/calendar'>Calendar</StyledLink>
				<StyledLink to='/tasks'>Tasks</StyledLink>
				<StyledLink to='/notes'>Notes</StyledLink>
			</Navigation>
		</Wrapper>
	)
}
