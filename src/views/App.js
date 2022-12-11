import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'
import { MainTemplate } from 'components/templates/MainTemplate'
import { GlobalStyle } from 'assets/styles/globalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
import { CurrentFamilyProvider } from 'providers/CurrentFamilyProvider'
import { RoutesComponent } from './RoutesComponent'

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<CurrentFamilyProvider>
					<MainTemplate>
						<RoutesComponent />
					</MainTemplate>
				</CurrentFamilyProvider>
			</ThemeProvider>
		</Router>
	)
}

export default App
