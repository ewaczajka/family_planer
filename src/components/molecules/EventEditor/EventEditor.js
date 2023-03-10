import { Checkbox } from 'components/atoms/Checkbox/Checkbox'
import { PurpleButton } from 'components/atoms/PurpleButton/PurpleButton'
import { StyledForm } from './EventEditor.styles'

export const EventEditor = ({
    editedEvent,
    saveEvent,
    handleInputChange,
    handleCheck,
}) => {
    console.log(editedEvent)
    return (
        <StyledForm>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    onChange={handleInputChange}
                    defaultValue={editedEvent.title}
                />
            </div>
            <div className="twoColumns">
                <div>
                    <label htmlFor="date">Start date</label>
                    <input
                        type="date"
                        onFocus={e => e.target.showPicker()}
                        name="start"
                        onChange={handleInputChange}
                        defaultValue={editedEvent.start}
                    />
                </div>
                <div>
                    <label htmlFor="date">End date</label>
                    <input
                        type="date"
                        onFocus={e => e.target.showPicker()}
                        name="end"
                        onChange={handleInputChange}
                        defaultValue={editedEvent.end}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="allDay">All day event</label>
                <Checkbox
                    type="checkbox"
                    name="allDay"
                    onChange={handleCheck}
                    checked={editedEvent.allDay}
                />
            </div>
            {!editedEvent.allDay ? (
                <>
                    <div className="twoColumns">
                        <div>
                            <label htmlFor="startTime">Start at</label>
                            <input
                                type="time"
                                onFocus={e => e.target.showPicker()}
                                name="startTime"
                                onChange={handleInputChange}
                                defaultValue={editedEvent.startTime}
                            />
                        </div>
                        <div>
                            <label htmlFor="endTime">End at</label>
                            <input
                                type="time"
                                onFocus={e => e.target.showPicker()}
                                name="endTime"
                                onChange={handleInputChange}
                                defaultValue={editedEvent.endTime}
                            />
                        </div>
                    </div>
                </>
            ) : null}
            <div className="twoColumns">
                <PurpleButton type="submit" onClick={saveEvent}>
                    Save event!
                </PurpleButton>
                <PurpleButton type="button" variant="secondary">
                    Delete
                </PurpleButton>
            </div>
        </StyledForm>
    )
}
