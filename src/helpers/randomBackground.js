import { theme } from 'assets/styles/theme'

export const randomBackground = () => {
    const color = Object.keys(theme.notesBackground)[Math.floor(Math.random() * Object.keys(theme.notesBackground).length)]
    return color
}
