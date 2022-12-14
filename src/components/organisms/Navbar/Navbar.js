import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoIcon from 'assets/logo.png'
import { Wrapper, Logo, Navigation, StyledLink } from './Navbar.styles'
import { signOut } from 'firebase/auth'
import { auth } from 'firebase-config'
import { FamilyContext } from 'providers/CurrentFamilyProvider'
import { UserContext } from 'providers/ActiveUserProvider'

export const Navbar = () => {
	const pathname = useLocation().pathname
	const navigate = useNavigate()

	const { activeFamily } = useContext(FamilyContext)
	const { activeUser } = useContext(UserContext)

	const signout = () => {
		signOut(auth)
		window.localStorage.removeItem('active_user_id')
		navigate('/login')
	}

	const showFamily = () => {
		navigate('/family')
	}

	return (
		<Wrapper>
			<Logo>
				<img src={logoIcon} alt='Logo' />
				FamilyPlaner
			</Logo>
			{pathname !== '/signup' && pathname !== '/login' ? (
				<Navigation>
					<StyledLink to='/' end>
						Dashboard
					</StyledLink>
					<StyledLink to='/calendar'>Calendar</StyledLink>
					<StyledLink to='/tasks'>Tasks</StyledLink>
					<StyledLink to='/notes'>Notes</StyledLink>
					<button onClick={signout}>Wyloguj</button>
					<button onClick={showFamily}>Family</button>
				</Navigation>
			) : null}
		</Wrapper>
	)
}
