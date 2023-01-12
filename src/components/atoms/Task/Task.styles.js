import styled from 'styled-components'
import { TaskBox } from 'components/atoms/TaskBox/TaskBox'

export const TaskField = styled(TaskBox)`
    border: none;
    color: ${({ theme }) => theme.colors.white}
    display: flex;
    justify-content: space-between;
`

export const StyledDiv = styled.div`
    display: flex;
    gap: 5px;
`
