import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoIcon from 'assets/logo.png'
import { Wrapper, Logo, Navigation, StyledLink } from './Navbar.styles'
import { signOut } from 'firebase/auth'
import { auth } from 'firebase-config'
import { UserContext } from 'providers/ActiveUserProvider'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { ACTIVE_USER_DATA } from 'data/consts'
import { ActiveUserMenu } from 'components/molecules/ActiveUserMenu/ActiveUserMenu'

export const Navbar = () => {
    const pathname = useLocation().pathname
    const navigate = useNavigate()

    const { remove } = useLocalStorage()

    const { activeUser, setActiveUser } = useContext(UserContext)
    const { color, logoLetters } = activeUser

    const signOutFamily = () => {
        signOut(auth)
        remove(ACTIVE_USER_DATA)
        setActiveUser('')
        navigate('/login')
    }

    const showFamily = () => {
        navigate('/family')
    }

    return (
        <Wrapper>
            <Logo>
                <img src={logoIcon} alt="Logo" />
                FamilyPlaner
            </Logo>
            {pathname !== '/signup' && pathname !== '/login' ? (
                <>
                    <Navigation>
                        <StyledLink to="/" end>
                            Dashboard
                        </StyledLink>
                        <StyledLink to="/calendar">Calendar</StyledLink>
                        <StyledLink to="/tasks">Tasks</StyledLink>
                        <StyledLink to="/notes">Notes</StyledLink>
                    </Navigation>
                    <ActiveUserMenu
                        color={color}
                        logoLetters={logoLetters}
                        signOutFamily={signOutFamily}
                        showFamily={showFamily}
                    />
                </>
            ) : null}
        </Wrapper>
    )
}
