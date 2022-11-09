import React from 'react'
import { Wrapper, Title, Date } from './Note.styles'
import ReactTimeAgo from 'react-time-ago'

export const Note = ({ title, date, color }) => {
	return (
		<Wrapper color={color}>
			<Title>{title}</Title>
			<Date>
				<ReactTimeAgo date={date} locale='en-US' />
			</Date>
		</Wrapper>
	)
}
