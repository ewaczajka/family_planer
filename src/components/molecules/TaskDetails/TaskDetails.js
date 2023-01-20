import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { forwardRef, useEffect, useRef } from 'react'
import { DeleteButton } from '../../atoms/DeleteButton/DeleteButton'
import { UserLogo } from '../../atoms/UserLogo/UserLogo'
import { TransparentInput } from '../../atoms/TransparentInput/TransparentInput.styles'
import {
    Wrapper,
    Row,
    AssignedUser,
    AllUsers,
    Placeholder,
} from './TaskDetails.styles'
import { Checkbox } from 'components/atoms/Checkbox/Checkbox'
import { faCalendarDays, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FamilyMembersQueries } from 'views/FamilyMembers/FamilyMembersQueries'

export const TaskDetails = forwardRef(
    (
        {
            task,
            handleInputChange,
            addAssignedUser,
            removeAssignedUser,
            handleCheck,
            deleteTask,
        },
        ref,
    ) => {
        const { id, checked, title, deadline, assignedUsers, extraInfo } = task

        const { users, getUsersQuery } = FamilyMembersQueries()

        const refSelectUsers = useRef(null)

        useEffect(() => {
            getUsersQuery()
        }, [])

        const showAllUsers = () => {
            refSelectUsers.current.classList.toggle('hidden')
        }

        return (
            <Wrapper ref={ref}>
                <Row className="twoColumns">
                    <Checkbox
                        type="checkbox"
                        checked={checked}
                        variant="dark"
                        onChange={() => handleCheck(task)}
                    />
                    <TransparentInput
                        variant="lightBackground"
                        defaultValue={title}
                        placeholder="Task..."
                        onChange={handleInputChange}
                        name="title"
                    />
                </Row>
                <Row className="twoColumns">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <TransparentInput
                        variant="lightBackground"
                        defaultValue={deadline}
                        type="date"
                        onChange={handleInputChange}
                        name="deadline"
                    />
                </Row>
                <Row className="flexContentSize">
                    {assignedUsers.length !== 0 ? (
                        assignedUsers.map(user => (
                            <AssignedUser className="twoColumns" key={user.id}>
                                <UserLogo
                                    size="small"
                                    color={user.color}
                                    logoLetters={user.logoLetters}
                                    onClick={() => removeAssignedUser(user)}
                                />
                                <span>{user.name}</span>
                            </AssignedUser>
                        ))
                    ) : (
                        <Placeholder>Add assigned family member</Placeholder>
                    )}
                    <div className="positionRight">
                        <UserLogo
                            variant="add"
                            color="dark"
                            onClick={showAllUsers}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </UserLogo>
                        <AllUsers className="hidden" ref={refSelectUsers}>
                            {users.map(user =>
                                !JSON.stringify(assignedUsers).includes(
                                    user.id,
                                ) ? (
                                    <UserLogo
                                        key={user.id}
                                        size="small"
                                        color={user.color}
                                        logoLetters={user.logoLetters}
                                        onClick={() => addAssignedUser(user)}
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
                            onChange={handleInputChange}
                            name="extraInfo"
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
