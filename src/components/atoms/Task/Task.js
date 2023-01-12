import React from 'react'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo'
import { TaskField, StyledDiv } from './Task.styles'
import { Checkbox } from '../Checkbox/Checkbox'

export const Task = ({ task, handleTask }) => {
    const { title, deadline, assignedUsers } = task
    return (
        <TaskField as="button" onClick={() => handleTask(task)}>
            <StyledDiv>
                <Checkbox type="checkbox" variant='light'/>
                <span>{title}</span>
            </StyledDiv>
            <StyledDiv>
                {deadline ? <span>{deadline}</span> : null}
                {assignedUsers
                    ? assignedUsers.map(user => (
                        <UserLogo
                            key={user.id}
                            size="small"
                            color={user.color}
                            logoLetters={user.logoLetters}
                        />
                    ))
                : null}
            </StyledDiv>
        </TaskField>
    )
}
