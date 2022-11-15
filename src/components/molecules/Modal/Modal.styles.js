import styled from 'styled-components'

export const ModalWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: calc(100vh - 20px);
	width: 840px;
	background: ${({ theme }) => theme.background.beige};
	box-shadow: ${({ theme }) => theme.boxShadow.shadow};
	border-radius: 5px;
`
