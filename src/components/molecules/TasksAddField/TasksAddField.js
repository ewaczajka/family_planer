import React, { useContext, useEffect, useState } from 'react'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { AddTaskBox, AddBtn } from './TasksAddField.styles'
import { Timestamp } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TransparentInput } from 'components/atoms/TransparentInput/TransparentInput.styles'
import { FamilyContext } from 'providers/CurrentFamilyProvider'
import { UserContext } from 'providers/ActiveUserProvider'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { TasksOrderRules } from 'data/orderRules'

export const TasksAddField = () => {
    const { activeFamily } = useContext(FamilyContext)
    const { activeUser } = useContext(UserContext)

    const { createDocQuery } = useCollectionQueries('tasks', TasksOrderRules)

    const [isReadyToSave, setIsReadyToSave] = useState(false)

    const taskTemplate = {
        checked: false,
        title: '',
        deadline: '',
        assignedUsers: [],
        extraInfo: '',
        familyID: activeFamily,
        creationDate: '',
        modificationDate: '',
        createdBy: activeUser.id,
        modifiedBy: activeUser.id,
    }
    const [newTask, setNewTask] = useState(taskTemplate)

    useEffect(() => {
        if (isReadyToSave) {
            createDocQuery(newTask)
            setNewTask(taskTemplate)
            setIsReadyToSave(false)
        }
    }, [isReadyToSave])

    const addNewTask = e => {
        e.preventDefault()
        if (newTask.title) {
            setIsReadyToSave(true)
            updateCreationData()
        }
        e.target.reset()
    }

    const handleTaskTitle = e => {
        e.preventDefault()
        setNewTask(prevState => ({ ...prevState, title: e.target.value }))
    }

    const updateCreationData = () => {
        setNewTask(prevState => ({
            ...prevState,
            creationDate: Timestamp.now(),
            modificationDate: Timestamp.now(),
        }))
    }

    return (
        <AddTaskBox as="form" onSubmit={e => addNewTask(e)}>
            <AddBtn type="submit">
                <FontAwesomeIcon icon={faPlus} />
            </AddBtn>
            <TransparentInput
                placeholder="Add New Task"
                onChange={handleTaskTitle}
            />
        </AddTaskBox>
    )
}
