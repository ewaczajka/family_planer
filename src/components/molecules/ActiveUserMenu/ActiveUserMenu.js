import { UserLogo } from 'components/atoms/UserLogo/UserLogo'
import { UserMenu } from './ActiveUserMenu.styles'

export const ActiveUserMenu = ({
    color,
    logoLetters,
    signOutFamily,
    showFamily,
}) => {
    return (
        <UserLogo
            size="small"
            color={color}
            logoLetters={logoLetters}
            variant="withMenu"
        >
            <UserMenu>
                <button onClick={showFamily}>Family Members</button>
                <button onClick={signOutFamily}>Log Out Family</button>
            </UserMenu>
        </UserLogo>
    )
}
