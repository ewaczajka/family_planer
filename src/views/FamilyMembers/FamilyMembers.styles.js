import styled from 'styled-components'
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper'

export const Wrapper = styled(ViewWrapper)`
	color: ${({ theme }) => theme.colors.white};
	width: 80%;
	height: auto;
	margin: 50px auto;
	justify-content: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 60px 30px 30px;
`
