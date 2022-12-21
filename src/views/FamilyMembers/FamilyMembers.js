import React, { useContext, useEffect, useState } from 'react'
import { FamilyContext } from 'providers/CurrentFamilyProvider'
import { Wrapper } from './FamilyMembers.styles'
import { UserField } from 'components/molecules/UserField/UserField'
import { UserEditor } from 'components/molecules/UserEditor/UserEditor'
import { UserAddField } from 'components/molecules/UserAddField/UserAddField'
import { theme } from 'assets/styles/theme'
import { useNavigate } from 'react-router-dom'
import { useActiveUser } from '../../providers/ActiveUserProvider'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { FamilyMembersQueries } from './FamilyMembersQueries'
import { ACTIVE_USER_ID } from 'data/consts'

export const FamilyMembers = () => {
    const { activeFamily } = useContext(FamilyContext)

    const { activeUser, setActiveUser } = useActiveUser()
    const { remove } = useLocalStorage()
    const {
        users,
        getUsersQuery,
        deleteUserQuery,
        updateUserQuery,
        createUserQuery,
    } = FamilyMembersQueries()

    const navigate = useNavigate()

    const initialValues = {
        currentUser: { familyID: activeFamily, color: theme.colors.gray },
    }

    const [editing, setEditing] = useState(false)
    const [creating, setCreating] = useState(false)
    const [currentUser, setCurrentUser] = useState(initialValues.currentUser)
    const [error, setError] = useState('')
    const [selectedColor, setSelectedColor] = useState(
        initialValues.currentUser.color,
    )

    useEffect(() => {
        getUsersQuery()
    }, [])

    const deleteUser = id => {
        if (id) {
            deleteUserQuery(id)
        } else {
            setCreating(false)
        }
    }

    const saveUser = async id => {
        if (!currentUser.name) {
            setError('Name is required!')
        } else {
            if (editing) {
                setEditing(false)
                updateUserQuery(id, currentUser)
            } else if (creating) {
                setCreating(false)
                createUserQuery(currentUser)
            }
            setCurrentUser(initialValues.currentUser)
            setSelectedColor(initialValues.currentUser.color)
        }
    }

    const editUser = (id, name, color) => {
        setEditing(id)
        setCurrentUser(prevState => ({
            ...prevState,
            name: name,
            color: color,
        }))
        setSelectedColor(color)
        setCreating(false)
        setError('')
    }

    const createNewUser = () => {
        setCreating(true)
        setEditing(false)
        setError('')
        setCurrentUser(initialValues.currentUser)
        setSelectedColor(initialValues.currentUser.color)
    }

    const handleChangeName = e => {
        setCurrentUser(prevState => ({ ...prevState, name: e.target.value }))
        setError('')
    }

    const handleChangeColor = e => {
        setCurrentUser(prevState => ({ ...prevState, color: e.target.value }))
        setSelectedColor(e.target.value)
    }

    const getLogoLetters = name => {
        const LogoLetters = name.match(/\b(\w)/g)
        return LogoLetters.join('').toUpperCase()
    }

    const selectUser = id => {
        remove(ACTIVE_USER_ID)
        navigate('/')
        setActiveUser(id)
    }

    return (
        <Wrapper>
            {users.map(user =>
                editing !== user.id ? (
                    <UserField
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        color={user.color}
                        editUser={editUser}
                        logoLetters={getLogoLetters(user.name)}
                        selectUser={selectUser}
                    />
                ) : (
                    <UserEditor
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        deleteUser={deleteUser}
                        handleChangeName={handleChangeName}
                        handleChangeColor={handleChangeColor}
                        selectedColor={selectedColor}
                        saveUser={saveUser}
                        error={error}
                        logoLetters={getLogoLetters(currentUser.name)}
                    />
                ),
            )}
            {creating ? (
                <UserEditor
                    deleteUser={deleteUser}
                    handleChangeName={handleChangeName}
                    handleChangeColor={handleChangeColor}
                    selectedColor={selectedColor}
                    saveUser={saveUser}
                    error={error}
                    logoLetters={
                        currentUser.name ? getLogoLetters(currentUser.name) : ''
                    }
                />
            ) : null}

            <UserAddField createNewUser={createNewUser} />
        </Wrapper>
    )
}
