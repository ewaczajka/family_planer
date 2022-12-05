import styled from 'styled-components'
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper'

export const Wrapper = styled(ViewWrapper)`
	color: ${({ theme }) => theme.colors.white};
	width: 80%;
	height: 300px;
	margin: 50px auto;
	justify-content: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 30px;
	* {
		display: block;
		margin: 10px;
	}
`
