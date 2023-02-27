import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Wrapper } from './Calendar.styles'

export const Calendar = () => {
    return (
        <Wrapper>
            <FullCalendar
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
