import styled from 'styled-components'

export const Wrapper = styled.div`
	flex: 1 1 0;
	font-size: ${({ theme }) => theme.fontSize.xs};

	svg {
		margin: 0 15px;
		color: ${({ theme }) => theme.colors.lightGray};
	}
`

export const StyledSearchBar = styled.input`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme }) => theme.colors.white};
	border: none;
	background-color: transparent;
	outline: none;

	::placeholder {
		color: ${({ theme }) => theme.colors.lightGray};
		font-style: italic;
	}
`
