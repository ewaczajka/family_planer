import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { DeleteButton } from '../../atoms/DeleteButton/DeleteButton'
import { UserLogo } from '../../atoms/UserLogo/UserLogo'
import { TransparentInput } from '../../atoms/TransparentInput/TransparentInput.styles'
import { Wrapper, Row, Checkbox, AllUsers } from './TaskDetails.styles'
import { FamilyMembersQueries } from 'views/FamilyMembers/FamilyMembersQueries'
import { faCalendar, faPlus } from '@fortawesome/free-solid-svg-icons'

export const TaskDetails = ({
    task,
    handleTitleChange,
    handleDeadlineChange,
    addAssignedUser,
    removeAssignedUser,
    handleExtraInfoChange,
    handleCheck,
    deleteTask,
}) => {
    const { users } = FamilyMembersQueries()
    const { id, title, deadline, assignedUsers, extraInfo } = task

    return (
        <Wrapper>
            <Row className="twoColumns">
                <Checkbox type="checkbox" onClick={handleCheck} />
                <TransparentInput
                    defaultValue={title}
                    placeholder="Task..."
                    onChange={handleTitleChange}
                />
            </Row>
            <Row className="twoColumns">
                <FontAwesomeIcon icon={faCalendar} />
                <TransparentInput
                    defaultValue={deadline}
                    type="date"
                    onChange={handleDeadlineChange}
                />
            </Row>
            <Row className="twoColumns">
                {assignedUsers
                    ? assignedUsers.map(user => (
                        <AllUsers>
                            <UserLogo
                                size="small"
                                color={user.color}
                                logoLetters={user.logoLetters}
                                onClick={removeAssignedUser}
                            />
                            <span>{user.name}</span>
                        </AllUsers>
                        ))
                    : null}
                <UserLogo variant="add">
                    <FontAwesomeIcon icon={faPlus} />
                    <AllUsers className="hidden">
                        {users.map(user =>
                            !JSON.stringify(assignedUsers).includes(user.id) ? (
                                <UserLogo
                                    size="small"
                                    color={user.color}
                                    logoLetters={user.logoLetters}
                                    onClick={addAssignedUser}
                                />
                            ) : null,
                        )}
                    </AllUsers>
                </UserLogo>
            </Row>
            <Row>
                <TransparentInput
                    as="textarea"
                    defaultValue={extraInfo}
                    onChange={handleExtraInfoChange}
                />
            </Row>
            <Row>
                <DeleteButton onClick={() => deleteTask(id)}>
                    Delete Task
                </DeleteButton>
            </Row>
        </Wrapper>
    )
}
