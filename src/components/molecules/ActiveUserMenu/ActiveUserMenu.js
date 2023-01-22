import { UserLogo } from 'components/atoms/UserLogo/UserLogo'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useRef } from 'react'
import { UserMenu, MenuItem } from './ActiveUserMenu.styles'

export const ActiveUserMenu = ({
    color,
    logoLetters,
    signOutFamily,
    showFamily,
}) => {
    const ref = useRef(null)
    const toggleMenu = () => {
        ref.current.classList.toggle('hidden')
    }

    useOnClickOutside(ref, () => {
        ref.current.classList.add('hidden')
    })

    return (
        <UserLogo
            size="small"
            color={color}
            logoLetters={logoLetters}
            variant="withMenu"
            onClick={toggleMenu}
        >
            <UserMenu ref={ref} className="hidden">
                <MenuItem onClick={showFamily}>Family Members</MenuItem>
                <MenuItem onClick={signOutFamily}>Log Out Family</MenuItem>
            </UserMenu>
        </UserLogo>
    )
}
