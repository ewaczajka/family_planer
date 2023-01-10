import React, { useEffect } from 'react'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { Task } from 'components/atoms/Task/Task'
import { Wrapper } from './TasksList.styles'

export const TasksList = ({ searchPhrase, handleTask }) => {
    const { documents, getDocsQuery } = useCollectionQueries(
        'tasks',
        'deadline',
    )

    useEffect(() => {
        getDocsQuery()
    }, [])

    return (
        <Wrapper>
            {documents.map(task =>
                task.title
                    .toLowerCase()
                    .includes(searchPhrase.toLowerCase()) ? (
                    <Task key={task.id} task={task} handleTask={handleTask} />
                ) : null,
            )}
        </Wrapper>
    )
}
