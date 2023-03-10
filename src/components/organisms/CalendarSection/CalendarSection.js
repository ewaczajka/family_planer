import React, { useContext, useEffect, useReducer, useState } from 'react'
import { SectionWrapper, SectionBody } from './CalendarSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'
import { Calendar } from 'components/molecules/Calendar/Calendar'
import { EventEditor } from 'components/molecules/EventEditor/EventEditor'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { FamilyContext } from 'providers/CurrentFamilyProvider'

const actionTypes = {
    addInitialValues: 'ADD INITIAL VALUES',
    handleChange: 'HANDLE CHANGE',
    checkedToggle: 'CHECKED TOGGLE',
    clearValues: 'CLEAR VALUES',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.addInitialValues:
            return {
                ...action.item,
            }
        case actionTypes.handleChange:
            return {
                ...state,
                [action.field]: action.value,
            }
        case actionTypes.checkedToggle:
            return {
                ...state,
                [action.field]: state.hasOwnProperty(action.field)
                    ? !state[action.field]
                    : true,
            }
        case actionTypes.clearValues:
            return {}
        default:
            return state
    }
}

export const CalendarSection = () => {
    const [isEditorOpen, setEditorOpen] = useState(false)
    const [editedEvent, dispatch] = useReducer(reducer, {})
    const { activeFamily } = useContext(FamilyContext)

    const { deleteDocQuery, updateDocQuery, createDocQuery } =
        useCollectionQueries('events', [])

    const handleEvent = event => {
        dispatch({ type: actionTypes.addInitialValues, item: event })
        setEditorOpen(true)
    }

    const saveItem = () => {
        if (editedEvent.id) {
            Object.keys(editedEvent).forEach(key =>
                !editedEvent[key] ? delete editedEvent[key] : {},
            )
            updateDocQuery(editedEvent.id, editedEvent.map())
        } else {
            createDocQuery(editedEvent)
        }
        setEditorOpen(false)
    }

    const deleteItem = id => {
        deleteDocQuery(id)
        setEditorOpen(false)
        dispatch({ type: actionTypes.clearValues })
    }

    const handleInputChange = e => {
        dispatch({
            type: actionTypes.handleChange,
            field: e.target.name,
            value: e.target.value,
        })
    }

    const handleCheck = e => {
        dispatch({
            type: actionTypes.checkedToggle,
            field: e.target.name,
        })
    }

    return (
        <SectionWrapper>
            <SectionHeader
                title="Calendar"
                searchPlaceholder="Search Events"
                addBtnText={isEditorOpen ? 'none' : 'Add event'}
                routeDirection="/calendar"
                handleOpen={() => handleEvent({ familyID: activeFamily })}
            />
            <SectionBody>
                <Calendar
                    isEditorOpen={isEditorOpen}
                    setEditorOpen={setEditorOpen}
                    handleEvent={handleEvent}
                />
                {isEditorOpen ? (
                    <EventEditor
                        saveEvent={saveItem}
                        deleteEvent={deleteItem}
                        handleInputChange={handleInputChange}
                        handleCheck={handleCheck}
                        editedEvent={editedEvent}
                    />
                ) : null}
            </SectionBody>
        </SectionWrapper>
    )
}
