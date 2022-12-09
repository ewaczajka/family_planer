import React, { useEffect, useState } from 'react'
import {
	Wrapper,
	ProfileLogo,
	UserName,
	UserNameInput,
	Buttons,
	Color,
	ColorIcon,
} from './User.styles'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'

export const User = ({
	id,
	name,
	color,
	handleUser,
	deleteUser,
	editing,
	creating,
	handleName,
	handleColor,
	selectedColor,
	saveUser,
	error,
	//logoLetters,
}) => {
	return (
		<Wrapper>
			{editing === id || creating ? (
				<>
					<button onClick={saveUser}>Save changes</button>
					<ProfileLogo color={selectedColor}>
						{/* {logoLetters} */}
						<Color
							className='color'
							type='color'
							value={selectedColor}
							onChange={handleColor}
						/>
						<ColorIcon />
					</ProfileLogo>
					<UserNameInput
						defaultValue={name}
						onChange={handleName}
						placeholder='Name...'
					/>
					{error ? <p>{error}</p> : null}
				</>
			) : (
				<>
					<Buttons className='buttons'>
						<DeleteButton onClick={handleUser}>Edit</DeleteButton>
						<DeleteButton onClick={deleteUser}>Delete</DeleteButton>
					</Buttons>
					<ProfileLogo color={color}>
						{/* {logoLetters} */}
					</ProfileLogo>
					<UserName>{name}</UserName>
				</>
			)}
		</Wrapper>
	)
}
