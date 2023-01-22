import React, { useEffect, useRef } from 'react'
import {
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledSubmitButton,
    StyledRedirectLink,
    StyledText,
    Wrapper,
} from './AuthenticationBox.styles'
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
    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    }, [])

    return (
        <Wrapper>
            {verificationMsg ? (
                <>
                    <StyledText>{verificationMsg}</StyledText>
                    <StyledSubmitButton as="a" href={'/'}>
                        Take me to log in!
                    </StyledSubmitButton>
                </>
            ) : (
                <>
                    <Title>{title}</Title>
                    <StyledForm onSubmit={handleSubmit} noValidate>
                        <StyledLabel htmlFor="email">
                            Your e-mail adress:
                        </StyledLabel>
                        <StyledInput
                            placeholder="e-mail"
                            name="email"
                            type="email"
                            onChange={handleEmail}
                            ref={ref}
                        />
                        <StyledLabel htmlFor="password">Password:</StyledLabel>
                        <StyledInput
                            placeholder="password"
                            name="password"
                            type="password"
                            onChange={handlePassword}
                        />
                        <StyledSubmitButton type="submit">
                            {btnText}
                        </StyledSubmitButton>
                        {error ? (
                            <StyledText>{authErrorMsg(error)}</StyledText>
                        ) : null}
                    </StyledForm>
                    <StyledRedirectLink href={changeRedirect}>
                        {redirectBtnText}
                    </StyledRedirectLink>
                </>
            )}
        </Wrapper>
    )
}
