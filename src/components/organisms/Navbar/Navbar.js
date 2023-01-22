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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarDays,
    faHouse,
    faListCheck,
    faNoteSticky,
} from '@fortawesome/free-solid-svg-icons'

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
                <h1>FamilyPlaner</h1>
            </Logo>
            {pathname !== '/signup' && pathname !== '/login' ? (
                <>
                    <Navigation className="navigation">
                        <StyledLink to="/" end>
                            <FontAwesomeIcon icon={faHouse} />
                            Dashboard
                        </StyledLink>
                        <StyledLink to="/calendar">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            Calendar
                        </StyledLink>
                        <StyledLink to="/tasks">
                            <FontAwesomeIcon icon={faListCheck} />
                            Tasks
                        </StyledLink>
                        <StyledLink to="/notes">
                            <FontAwesomeIcon icon={faNoteSticky} />
                            Notes
                        </StyledLink>
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
