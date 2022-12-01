import styled from 'styled-components'

export const StyledNoteEditor = styled.div`
	padding: 0 35px 35px 35px;
	display: flex;
	flex-direction: column;
	position: relative;

	.deleteBtn {
		border-top: 1px solid ${({ theme }) => theme.colors.lineGray};
		border-bottom: 1px solid ${({ theme }) => theme.colors.lineGray};
		text-align: right;
		padding: 10px 0;
	}

	> :last-child {
		position: absolute;
		top: 40px;
		right: 40px;
	}
`

export const TitleInput = styled.input`
	margin-right: 35px;
	height: 105px;
	border: none;
	font-size: ${({ theme }) => theme.fontSize.xl};
	font-weight: bold;
	color: ${({ theme }) => theme.colors.darkGray};
	background-color: transparent;
	outline: none;

	::placeholder {
		color: ${({ theme }) => theme.colors.gray};
		font-style: italic;
	}
`

export const TextInput = styled.textarea`
	border: none;
	margin-top: 15px;
	font-size: ${({ theme }) => theme.fontSize.m};
	line-height: 28px;
	color: ${({ theme }) => theme.colors.darkGray};
	background-color: transparent;
	outline: none;
	resize: none;

	::placeholder {
		color: ${({ theme }) => theme.colors.gray};
		font-style: italic;
	}
`
