import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 20px 30px;

	> :first-child {
		padding-right: 15px;
		margin: 1px 0;
		border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
	}
	
	> :last-child {
		margin-left: 20px;
	}
`
