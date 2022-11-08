import React from 'react'
import logoIcon from 'assets/logo.png'
import { Wrapper, Logo, Navigation, StyledLink } from './Navbar.styles'

const Navbar = () => {
	return (
		<Wrapper>
			<Logo>
				<img src={logoIcon} alt='Logo' />
				FamilyPlaner
			</Logo>
			<Navigation>
				<StyledLink className='active'>Dashboard</StyledLink>
				<StyledLink>Calendar</StyledLink>
				<StyledLink>Tasks</StyledLink>
				<StyledLink>Notes</StyledLink>
			</Navigation>
		</Wrapper>
	)
}

export default Navbar
