import React, { useContext, useEffect, useState } from 'react'
import { FamilyContext } from 'providers/CurrentFamilyProvider'
import { Wrapper } from './FamilyMembers.styles'
import { UserField } from 'components/molecules/UserField/UserField'
import { UserEditor } from 'components/molecules/UserEditor/UserEditor'
import { UserAddField } from 'components/molecules/UserAddField/UserAddField'
import { theme } from 'assets/styles/theme'
import { useNavigate } from 'react-router-dom'
import { useActiveUser } from 'providers/ActiveUserProvider'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { getLogoLetters } from 'helpers/getLogoLetters'
import { ACTIVE_USER_DATA } from 'data/consts'
import { useCollectionQueries } from 'hooks/useCollectionQueries'
import { MembersOrderRules } from 'data/orderRules'
import { Timestamp } from 'firebase/firestore'

export const FamilyMembers = () => {
    const { activeFamily } = useContext(FamilyContext)
    const { setActiveUser } = useActiveUser()
    const { remove } = useLocalStorage()
    const {
        documents,
        getDocsQuery,
        deleteDocQuery,
        updateDocQuery,
        createDocQuery,
    } = useCollectionQueries('members', MembersOrderRules)

    const navigate = useNavigate()

    const initialValues = {
        familyID: activeFamily,
        color: theme.colors.gray,
        creationDate: Timestamp.now(),
    }

    const [editing, setEditing] = useState(false)
    const [creating, setCreating] = useState(false)
    const [currentUser, setCurrentUser] = useState(initialValues)
    const [error, setError] = useState('')
    const [selectedColor, setSelectedColor] = useState(initialValues.color)

    useEffect(() => {
        getDocsQuery()
    }, [])

    const deleteUser = id => {
        if (id) {
            deleteDocQuery(id)
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
                updateDocQuery(id, currentUser)
            } else if (creating) {
                setCreating(false)
                createDocQuery(currentUser)
            }
            setCurrentUser(initialValues)
            setSelectedColor(initialValues.color)
        }
    }

    const editUser = user => {
        setEditing(user.id)
        setCurrentUser(prevState => ({
            ...prevState,
            name: user.name,
            color: user.color,
            creationDate: user.creationDate,
        }))
        setSelectedColor(user.color)
        setCreating(false)
        setError('')
    }

    const createNewUser = () => {
        setCreating(true)
        setEditing(false)
        setError('')
        setCurrentUser(initialValues)
        setSelectedColor(initialValues.color)
    }

    const handleChangeName = e => {
        setCurrentUser(prevState => ({
            ...prevState,
            name: e.target.value,
            logoLetters: getLogoLetters(e.target.value),
        }))
        setError('')
    }

    const handleChangeColor = e => {
        setCurrentUser(prevState => ({ ...prevState, color: e.target.value }))
        setSelectedColor(e.target.value)
    }

    const selectUser = data => {
        remove(ACTIVE_USER_DATA)
        navigate('/')
        setActiveUser(data)
    }

    return (
        <Wrapper>
            {documents.map(user =>
                editing !== user.id ? (
                    <UserField
                        key={user.id}
                        user={user}
                        editUser={editUser}
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
