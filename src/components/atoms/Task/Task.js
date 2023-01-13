import React, { forwardRef } from 'react'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo'
import { TaskField, StyledDiv } from './Task.styles'
import { Checkbox } from '../Checkbox/Checkbox'

export const Task = forwardRef(({ task, handleTask, handleCheck }, ref) => {
    const { title, deadline, assignedUsers, checked } = task

    return (
        <TaskField as="button" onClick={e => handleTask(task, e)}>
            <StyledDiv>
                <Checkbox
                    type="checkbox"
                    variant="light"
                    ref={ref}
                    onChange={() => handleCheck(task)}
                    checked={checked}
                />
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
})
