import { LogoBackground, LogoLetters } from './UserLogo.styles'

export const UserLogo = ({
    size,
    variant,
    color,
    logoLetters,
    children,
    onClick,
}) => {
    return (
        <LogoBackground
            size={size}
            variant={variant}
            color={color}
            onClick={onClick}
        >
            <LogoLetters>{logoLetters}</LogoLetters>
            {children}
        </LogoBackground>
    )
}
