import styled from 'styled-components'

export const Wrapper = styled.div`
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	:hover .buttons {
		opacity: 100%;
	}
`

export const ProfileLogo = styled.div`
	width: 100px;
	height: 100px;
	margin: 0px 20px;
	border-radius: 50%;
	background: ${({ theme, color }) => theme.background[color]};
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.colors.gray};
	display: flex;
	align-items: center;
	justify-content: center;
`

export const UserName = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.white};
`

export const Buttons = styled.div`
	opacity: 20%;
	margin: 0px;
	display: flex;
`
