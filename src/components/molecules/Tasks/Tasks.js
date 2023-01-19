import React, {
    useContext,
    useEffect,
    useReducer,
    useRef,
    useState,
} from 'react'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { Wrapper } from './Tasks.styles'
import { TaskDetails } from 'components/molecules/TaskDetails/TaskDetails'
import { TasksList } from 'components/molecules/TasksList/TasksList'
import { Timestamp } from 'firebase/firestore'
import { UserContext } from 'providers/ActiveUserProvider'
import { TasksOrderRules } from 'data/orderRules'

const taskActionTypes = {
    addInitialValues: 'ADD INITIAL VALUES',
    taskChange: 'HANDLE TASK CHANGE',
    checkedToggle: 'CHECKED TOGGLE',
    clearValues: 'CLEAR VALUES',
}

const reducer = (state, action) => {
    switch (action.type) {
        case taskActionTypes.addInitialValues:
            return {
                ...action.task,
            }
        case taskActionTypes.taskChange:
            return {
                ...state,
                [action.field]: action.value,
            }
        case taskActionTypes.checkedToggle:
            return {
                ...state,
                checked: !state.checked,
            }
        case taskActionTypes.clearValues:
            return {}
        default:
            return state
    }
}

export const Tasks = ({ searchPhrase }) => {
    const { deleteDocQuery, updateDocQuery } = useCollectionQueries(
        'tasks',
        TasksOrderRules,
    )
    const { activeUser } = useContext(UserContext)
    const refDetailsBox = useRef(null)
    const refCheckboxes = useRef([])

    const [openDetails, setOpenDetails] = useState(false)
    const [initialValues, setInitialValues] = useState({})

    const [editedTask, dispatch] = useReducer(reducer, {})
    const [checkedTask, setCheckedTask] = useState({})

    useEffect(() => {
        if (checkedTask.id) {
            updateDocQuery(checkedTask.id, checkedTask)
            setCheckedTask({})
        }
    }, [checkedTask])

    const saveEditedTask = () => {
        if (JSON.stringify(editedTask) !== JSON.stringify(initialValues)) {
            console.log('update')
            updateModificationData()
            updateDocQuery(editedTask.id, editedTask)
        }
        setOpenDetails(false)
        dispatch({ type: taskActionTypes.clearValues })
    }

    useOnClickOutside(refDetailsBox, saveEditedTask, refCheckboxes)

    const handleTask = (task, e) => {
        if (!refCheckboxes.current.includes(e.target)) {
            dispatch({ type: taskActionTypes.addInitialValues, task: task })
            setInitialValues(task)
            setOpenDetails(true)
        }
    }

    const updateModificationData = () => {
        dispatch({
            type: taskActionTypes.taskChange,
            field: 'modificationDate',
            value: Timestamp.now(),
        })
        dispatch({
            type: taskActionTypes.taskChange,
            field: 'modifiedBy',
            value: activeUser.id,
        })
    }

    const handleInputChange = e => {
        dispatch({
            type: taskActionTypes.taskChange,
            field: e.target.name,
            value: e.target.value,
        })
    }

    const addAssignedUser = user => {
        const lastSaved = editedTask.assignedUsers
        const newSaved = lastSaved.concat([user])
        dispatch({
            type: taskActionTypes.taskChange,
            field: 'assignedUsers',
            value: newSaved,
        })
    }

    const removeAssignedUser = user => {
        const lastSaved = editedTask.assignedUsers
        const newSaved = lastSaved.filter(
            prevUser => JSON.stringify(prevUser) !== JSON.stringify(user),
        )
        dispatch({
            type: taskActionTypes.taskChange,
            field: 'assignedUsers',
            value: newSaved,
        })
    }

    const handleCheck = task => {
        if (editedTask.id === task.id) {
            dispatch({ type: taskActionTypes.checkedToggle })
            setOpenDetails(openDetails)
        }
        setCheckedTask(task)
        setCheckedTask(prevState => ({
            ...prevState,
            checked: !task.checked,
        }))
    }

    const deleteTask = id => {
        deleteDocQuery(id)
        setOpenDetails(false)
        dispatch({ type: taskActionTypes.clearValues })
    }

    return (
        <Wrapper>
            <TasksList
                searchPhrase={searchPhrase}
                handleTask={handleTask}
                ref={refCheckboxes}
                handleCheck={handleCheck}
            />
            {openDetails ? (
                <TaskDetails
                    ref={refDetailsBox}
                    task={editedTask}
                    handleInputChange={handleInputChange}
                    addAssignedUser={addAssignedUser}
                    removeAssignedUser={removeAssignedUser}
                    handleCheck={handleCheck}
                    deleteTask={deleteTask}
                />
            ) : null}
        </Wrapper>
    )
}
