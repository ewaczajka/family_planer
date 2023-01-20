import styled from 'styled-components'
import { TaskBox } from 'components/atoms/TaskBox/TaskBox'

export const TaskField = styled(TaskBox)`
    border: none;
    display: flex;
    justify-content: space-between;
`

export const StyledDiv = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    gap: 10px;
`
