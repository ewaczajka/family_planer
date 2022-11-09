import { theme } from "assets/styles/theme"

export const randomBackground = () => {
    const color = Object.keys(theme.background)[Math.floor(Math.random()*5)]
    return color
}