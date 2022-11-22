import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Title } from 'components/atoms/Title/Title'
import { SearchBar } from 'components/atoms/SearchBar/SearchBar'
import { ExpandButton } from 'components/atoms/ExpandButton/ExpandButton'
import { AddButton } from 'components/atoms/AddButton/AddButton'
import { Wrapper } from './SectionHeader.styles'

export const SectionHeader = ({ title, searchPlaceholder, addBtnText, routeDirection, handleOpen, handleChange }) => {
	const location = useLocation()
	return (
		<Wrapper>
			<Title>{title}</Title>
			<SearchBar searchPlaceholder={searchPlaceholder} handleChange={handleChange} />
			{location.pathname === '/' ? <ExpandButton routeDirection={routeDirection} /> : null}
			<AddButton addBtnText={addBtnText} handleOpen={handleOpen} />
		</Wrapper>
	)
}

SectionHeader.propTypes = {
	title: PropTypes.string,
	searchPlaceholder: PropTypes.string,
	addBtnText: PropTypes.string,
	handleOpen: PropTypes.func,
}
