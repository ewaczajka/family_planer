export const getLogoLetters = name => {
    const LogoLetters = name.match(/\b[a-zA-Z0-9]/g)
    if (LogoLetters) {
        return LogoLetters.join('').toUpperCase()
    }
}
