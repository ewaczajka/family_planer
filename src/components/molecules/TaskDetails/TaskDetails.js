import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { forwardRef } from 'react'
import { DeleteButton } from '../../atoms/DeleteButton/DeleteButton'
import { UserLogo } from '../../atoms/UserLogo/UserLogo'
import { TransparentInput } from '../../atoms/TransparentInput/TransparentInput.styles'
import {
    Wrapper,
    Row,
    Checkbox,
    AllUsers,
    Placeholder,
} from './TaskDetails.styles'
import { FamilyMembersQueries } from 'views/FamilyMembers/FamilyMembersQueries'
import { faCalendarDays, faPlus } from '@fortawesome/free-solid-svg-icons'

export const TaskDetails = forwardRef(
    (
        {
            task,
            handleTitleChange,
            handleDeadlineChange,
            addAssignedUser,
            removeAssignedUser,
            handleExtraInfoChange,
            handleCheck,
            deleteTask,
        },
        ref,
    ) => {
        const { users } = FamilyMembersQueries()
        const { id, title, deadline, assignedUsers, extraInfo } = task

        console.log(users)

        return (
            <Wrapper ref={ref}>
                <Row className="twoColumns">
                    <Checkbox type="checkbox" onClick={handleCheck} />
                    <TransparentInput
                        variant="lightBackground"
                        defaultValue={title}
                        placeholder="Task..."
                        onChange={handleTitleChange}
                    />
                </Row>
                <Row className="twoColumns">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <TransparentInput
                        variant="lightBackground"
                        defaultValue={deadline}
                        type="date"
                        onChange={handleDeadlineChange}
                    />
                </Row>
                <Row className="twoColumns">
                    {assignedUsers ? (
                        assignedUsers.map(user => (
                            <>
                                <UserLogo
                                    size="small"
                                    color={user.color}
                                    logoLetters={user.logoLetters}
                                    onClick={removeAssignedUser}
                                />
                                <span>{user.name}</span>
                            </>
                        ))
                    ) : (
                        <Placeholder>Add assigned family member</Placeholder>
                    )}
                    <div className="positionRight">
                        <UserLogo variant="add" color="dark">
                            <FontAwesomeIcon icon={faPlus} />
                        </UserLogo>
                        <AllUsers className="hisdden">
                            {users.map(user =>
                                !JSON.stringify(assignedUsers).includes(
                                    user.id,
                                ) ? (
                                    <UserLogo
                                        size="small"
                                        color={user.color}
                                        logoLetters={user.logoLetters}
                                        onClick={addAssignedUser}
                                    />
                                ) : null,
                            )}
                        </AllUsers>
                    </div>
                </Row>
                <Row className="flexGrow">
                    <div>
                        <TransparentInput
                            variant="lightBackground"
                            as="textarea"
                            rows="10"
                            defaultValue={extraInfo}
                            placeholder="Text more info here"
                            onChange={handleExtraInfoChange}
                        />
                    </div>
                </Row>
                <Row className="centered">
                    <DeleteButton onClick={() => deleteTask(id)}>
                        Delete Task
                    </DeleteButton>
                </Row>
            </Wrapper>
        )
    },
)
