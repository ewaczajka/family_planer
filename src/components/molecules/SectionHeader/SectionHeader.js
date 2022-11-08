import React from 'react'
import PropTypes from 'prop-types'
import { Title } from 'components/atoms/Title/Title'
import { SearchBar } from 'components/atoms/SearchBar/SearchBar'
import { ExpandButton } from 'components/atoms/ExpandButton/ExpandButton'
import { AddButton } from 'components/atoms/AddButton/AddButton'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 20px 30px;
`

export const SectionHeader = ({ title, searchPlaceholder, addBtn }) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<SearchBar searchPlaceholder={searchPlaceholder} />
			<ExpandButton />
			<AddButton addBtn={addBtn} />
		</Wrapper>
	)
}

SectionHeader.propTypes = {
	title: PropTypes.string,
	searchPlaceholder: PropTypes.string,
	addBtn: PropTypes.string,
}
