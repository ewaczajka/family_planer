import { Checkbox } from 'components/atoms/Checkbox/Checkbox'
import { PurpleButton } from 'components/atoms/PurpleButton/PurpleButton'
import { StyledForm } from './EventEditor.styles'

export const EventEditor = ({ saveEvent, handleChange, editedEvent }) => {
    return (
        <StyledForm>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    onFocus={e => e.target.showPicker()}
                    name="date"
                />
            </div>
            <div>
                <label htmlFor="all-day">All day event</label>
                <Checkbox type="checkbox" name="all-day" />
            </div>
            <div>
                <label htmlFor="start-time">Start at</label>
                <input
                    type="time"
                    onFocus={e => e.target.showPicker()}
                    name="start-time"
                />
            </div>
            <div>
                <label htmlFor="end-time">End at</label>
                <input
                    type="time"
                    onFocus={e => e.target.showPicker()}
                    name="end-time"
                />
            </div>
            <div>
                <PurpleButton type="submit">Save event!</PurpleButton>
                <PurpleButton type="button" variant="secondary">
                    Delete
                </PurpleButton>
            </div>
        </StyledForm>
    )
}
