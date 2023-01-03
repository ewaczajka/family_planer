export const authErrorMsg = error => {
    let message
    switch (true) {
        case error.includes('email-already-in-use'):
            message = 'Account connected with this email already exists.'
            break
        case error.includes('invalid-email'):
            message = 'Email address is incorrect.'
            break
        case error.includes('user-not-found'):
            message = 'There is no account connected with this email.'
            break
        case error.includes('wrong-password'):
            message = 'Incorrect password.'
            break
        case error.includes('invalid-password'):
            message = 'Password must have at least six characters.'
            break
        case error.includes('weak-password'):
            message = 'Password must have at least six characters.'
            break
        default:
            message = 'Please, enter a correct data.'
    }

    return message
}
