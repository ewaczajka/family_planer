import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'
import { MainTemplate } from 'components/templates/MainTemplate'
import { GlobalStyle } from 'assets/styles/globalStyle'
import Dashboard from 'views/Dashboard'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<MainTemplate>
				<Dashboard />
			</MainTemplate>
		</ThemeProvider>
	)
}

export default App
