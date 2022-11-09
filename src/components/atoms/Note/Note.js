import React from 'react'
import { Wrapper, Title, Date } from './Note.styles'

export const Note = ({ title, date, color }) => {
	return (
		<Wrapper color={color}>
			<Title>{title}</Title>
			<Date>{date} ago</Date>
		</Wrapper>
	)
}
