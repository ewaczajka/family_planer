import React, { forwardRef, useEffect } from 'react'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { Task } from 'components/atoms/Task/Task'
import { Wrapper } from './TasksList.styles'

export const TasksList = forwardRef(
    ({ searchPhrase, handleTask, handleCheck }, ref) => {
        const { documents, getDocsQuery } = useCollectionQueries(
            'tasks',
            'checked',
        )

        useEffect(() => {
            getDocsQuery()
        }, [])

        return (
            <Wrapper>
                {documents.map((task, i) =>
                    task.title
                        .toLowerCase()
                        .includes(searchPhrase.toLowerCase()) ? (
                        <Task
                            key={task.id}
                            task={task}
                            handleTask={handleTask}
                            handleCheck={handleCheck}
                            ref={task => (ref.current[i] = task)}
                        />
                    ) : null,
                )}
            </Wrapper>
        )
    },
)
