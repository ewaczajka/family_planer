import React, { useEffect, useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Wrapper } from './Calendar.styles'

export const Calendar = ({ openEditor }) => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.calendar.updateSize()
    }, [openEditor])

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
            />
        </Wrapper>
    )
}
