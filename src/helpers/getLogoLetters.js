export const getLogoLetters = name => {
    const LogoLetters = name.match(/^.|(?<= )./g)
    if (LogoLetters) {
        return LogoLetters.join('').toUpperCase()
    }
}
