import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    a, button {
        font-family: 'Roboto', sans-serif;
    }

`
