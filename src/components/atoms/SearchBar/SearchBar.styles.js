import styled from 'styled-components'
import { TransparentInput } from 'components/atoms/TransparentInput/TransparentInput.styles'

export const Wrapper = styled.div`
	flex: 1 1 0;
	font-size: ${({ theme }) => theme.fontSize.xs};

	svg {
		margin: 0 15px;
		color: ${({ theme }) => theme.colors.lightGray};
	}
`

export const StyledSearchBar = styled(TransparentInput)`
	font-size: ${({ theme }) => theme.fontSize.xs};
`
