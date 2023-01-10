import React, { useContext, useEffect, useRef, useState } from 'react'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { Wrapper } from './Tasks.styles'
import { TaskDetails } from 'components/molecules/TaskDetails/TaskDetails'
import { TasksList } from 'components/molecules/TasksList/TasksList'
import { Timestamp } from 'firebase/firestore'
import { UserContext } from 'providers/ActiveUserProvider'

export const Tasks = ({ searchPhrase }) => {
    const { deleteDocQuery, updateDocQuery } = useCollectionQueries(
        'tasks',
        'deadline',
    )
    const { activeUser } = useContext(UserContext)

    const [editedTask, setEditedTask] = useState()
    const [taskToOpen, setTaskToOpen] = useState(null)
    const [openDetails, setOpenDetails] = useState(false)
    //const ref = useRef(null)

    // useEffect(() => {
    //     const handleClickOutside = e => {
    //         if (ref.current && !ref.current.contains(e.target)) {
    //             updateModificationData()
    //             updateDocQuery(editedTask.id)
    //         }
    //     }
    //     document.addEventListener('click', handleClickOutside, true)
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true)
    //     }
    // }, [])

    useEffect(() => {
        if (openDetails) {
            setEditedTask(taskToOpen)
        }
    }, [openDetails])

    const handleTask = task => {
        setTaskToOpen(task)
        setOpenDetails(true)
    }

    const updateModificationData = () => {
        setEditedTask(prevState => ({
            ...prevState,
            modificationDate: Timestamp.now(),
            modifiedBy: activeUser.id,
        }))
    }

    const handleTitleChange = e => {
        setEditedTask(prevState => ({
            ...prevState,
            title: e.target.value,
        }))
    }

    const handleDeadlineChange = e => {
        setEditedTask(prevState => ({
            ...prevState,
            deadline: e.target.value,
        }))
    }

    const addAssignedUser = id => {
        setEditedTask(prevState => ({
            ...prevState,
            assigedUser: prevState.assigedUser.push(id),
        }))
    }

    const removeAssignedUser = id => {
        setEditedTask(prevState => ({
            ...prevState,
            assigedUser: prevState.assigedUser.filter(
                assignedId => assignedId !== id,
            ),
        }))
    }

    const handleExtraInfoChange = e => {
        setEditedTask(prevState => ({
            ...prevState,
            extraInfo: e.target.value,
        }))
    }

    const deleteTask = id => {
        deleteDocQuery(taskToOpen.id)
        setOpenDetails(false)
        setEditedTask(null)
    }

    return (
        <Wrapper>
            <TasksList searchPhrase={searchPhrase} handleTask={handleTask} />
            {openDetails ? (
                <TaskDetails
                    // ref={ref}
                    task={taskToOpen}
                    handleTitleChange={handleTitleChange}
                    handleDeadlineChange={handleDeadlineChange}
                    addAssignedUser={addAssignedUser}
                    removeAssignedUser={removeAssignedUser}
                    handleExtraInfoChange={handleExtraInfoChange}
                    //handleCheck={handleCheck}
                    deleteTask={() => deleteTask(taskToOpen.id)}
                />
            ) : null}
        </Wrapper>
    )
}
