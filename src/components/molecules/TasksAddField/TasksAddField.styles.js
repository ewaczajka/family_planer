import styled from 'styled-components'
import { TaskBox } from 'components/atoms/TaskBox/TaskBox'

export const AddTaskBox = styled(TaskBox)`
    justify-content: left;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.darkGray};
    box-shadow: 0px -20px 20px ${({ theme }) => theme.colors.darkGray};
    position: relative;
    z-index: 1;
`

export const AddBtn = styled.button`
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-right: 10px;
`
