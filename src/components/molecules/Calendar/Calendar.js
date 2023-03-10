import React, { useEffect, useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Wrapper } from './Calendar.styles'
import { useCollectionQueries } from 'hooks/useCollectionQueries'

export const Calendar = ({ isEditorOpen, setEditorOpen, handleEvent }) => {
    const ref = useRef(null)
    const { documents, getDocsQuery } = useCollectionQueries('events', [])

    useEffect(() => {
        getDocsQuery()
    }, [])

    useEffect(() => {
        ref.current.calendar.updateSize()
    }, [isEditorOpen])

    return (
        <Wrapper>
            <FullCalendar
                ref={ref}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                firstDay={1}
                fixedWeekCount={false}
                stickyHeaderDates={true}
                height="100%"
                expandRows={true}
                headerToolbar={{
                    start: 'title',
                    center: '',
                    end: 'prev today next',
                }}
                events={documents}
                eventClick={e => handleEvent(e.event._def)}
            />
        </Wrapper>
    )
}
