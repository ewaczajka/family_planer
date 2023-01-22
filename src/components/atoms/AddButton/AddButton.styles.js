import styled from 'styled-components'
import { PurpleButton } from '../PurpleButton/PurpleButton'

export const StyledAddButton = styled(PurpleButton)`
    font-size: ${({ theme }) => theme.fontSize.xs};
    border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
    padding: 8px 10px 8px 8px;

    svg {
        margin-right: 8px;
    }
`
