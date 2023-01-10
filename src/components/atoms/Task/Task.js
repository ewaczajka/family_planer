import React from 'react'
import { UserLogo } from 'components/atoms/UserLogo/UserLogo'
import { TaskField } from './Task.styles'

export const Task = ({ task, handleTask }) => {
    const { title, deadline, assignedUsers } = task
    return (
        <TaskField as="button" onClick={() => handleTask(task)}>
            <div>
                <input type="checkbox"></input>
                <span>{title}</span>
            </div>
            <div>
                {deadline ? <span>{deadline}</span> : null}
                {assignedUsers
                    ? assignedUsers.map(user => (
                          <UserLogo
                              size="small"
                              color={user.color}
                              logoLetters={user.logoLetters}
                          />
                      ))
                    : null}
            </div>
        </TaskField>
    )
}
