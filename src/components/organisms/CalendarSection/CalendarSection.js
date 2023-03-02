import React, { useEffect, useState } from 'react'
import { SectionWrapper, SectionBody } from './CalendarSection.styles'
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader'
import { Calendar } from 'components/molecules/Calendar/Calendar'
import { EventEditor } from 'components/molecules/EventEditor/EventEditor'
import { useCollectionQueries } from 'hooks/useCollectionQueries'

export const CalendarSection = () => {
    const [openEditor, setOpenEditor] = useState(false)

    const {
        documents,
        getDocsQuery,
        deleteDocQuery,
        updateDocQuery,
        createDocQuery,
    } = useCollectionQueries('events', [])

    useEffect(() => {
        getDocsQuery()
    }, [])

    return (
        <SectionWrapper openEditor={openEditor}>
            <SectionHeader
                title="Calendar"
                searchPlaceholder="Search Events"
                addBtnText={openEditor ? 'none' : 'Add event'}
                routeDirection="/calendar"
                handleOpen={() => setOpenEditor(!openEditor)}
            />
            <SectionBody>
                <Calendar openEditor={openEditor} events={documents} />
                {openEditor ? <EventEditor /> : null}
            </SectionBody>
        </SectionWrapper>
    )
}
