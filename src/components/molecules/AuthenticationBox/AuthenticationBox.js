import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './AutenticationBox.styles'
import { Title } from 'components/atoms/Title/Title'
import { authErrorMsg } from 'helpers/authErrorMsg'

export const AuthenticationBox = ({
    title,
    btnText,
    handleEmail,
    handlePassword,
    handleSubmit,
    error,
    changeRedirect,
    redirectBtnText,
    verificationMsg,
}) => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            {verificationMsg ? (
                <>
                    <p>{verificationMsg}</p>
                    <button type="button" onClick={() => navigate('/')}>
                        Take me to log in!
                    </button>
                </>
            ) : (
                <>
                    <Title>{title}</Title>
                    <form onSubmit={e => handleSubmit(e)} noValidate>
                        <label htmlFor="email">Your e-mail adress:</label>
                        <input
                            placeholder="e-mail"
                            name="email"
                            type="email"
                            onChange={e => handleEmail(e)}
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            placeholder="password"
                            name="password"
                            type="password"
                            onChange={e => handlePassword(e)}
                        />
                        <button type="submit">{btnText}</button>
                    </form>
                    {error ? <p>{authErrorMsg(error)}</p> : null}
                    <button
                        type="button"
                        onClick={() => navigate(changeRedirect)}
                    >
                        {redirectBtnText}
                    </button>
                </>
            )}
        </Wrapper>
    )
}
