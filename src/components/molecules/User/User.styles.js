import styled from 'styled-components'
import colors from 'assets/colors.png'

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
	background: ${({ color }) => color};
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.colors.gray };
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: 10px;

	:focus .color {
		opacity: 100%;
	}
`

export const UserName = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.white};
`

export const UserNameInput = styled.input`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.white};
	width: 130px;
	text-align: center;

	border: none;
	background: ${({ theme }) => theme.colors.gray};
	outline: none;

	::placeholder {
		color: ${({ theme }) => theme.colors.lightGray};
		font-style: italic;
	}
`

export const Buttons = styled.div`
	opacity: 0%;
	display: flex;

	button {
		margin: 0 5px;
	}
`

export const Color = styled.input`
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	outline: none;
	height: 25px;
	width: 25px;
	border-radius: 50%;
`

export const ColorIcon = styled.div`
	z-index: 1;
	position: absolute;
	left: 0px;
	top: 0px;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	height: 25px;
	width: 25px;
	border-radius: 15px;
	background: url(${colors});
	background-position: center;
	background-size: 150%;
	pointer-events: none;
`
