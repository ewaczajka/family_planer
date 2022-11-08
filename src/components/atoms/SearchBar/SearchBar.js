import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Wrapper, StyledSearchBar } from './SearchBar.styles'

export const SearchBar = ({ searchPlaceholder }) => {
	return (
		<Wrapper>
			<FontAwesomeIcon icon={faMagnifyingGlass} />
			<StyledSearchBar placeholder={searchPlaceholder} />
		</Wrapper>
	)
}

SearchBar.propTypes = {
	searchPlaceholder: PropTypes.string,
}
