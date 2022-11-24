import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title, Date } from './Note.styles'
import ReactTimeAgo from 'react-time-ago'

export const Note = ({ title, date, color, onClick }) => {
	return (
		<Wrapper color={color} onClick={onClick}>
			<Title>{title}</Title>
			<Date>
				<ReactTimeAgo date={date} locale='en-US' />
			</Date>
		</Wrapper>
	)
}

Note.propTypes = {
	title: PropTypes.string,
	date: PropTypes.number,
	color: PropTypes.string,
	onClick: PropTypes.func,
}
