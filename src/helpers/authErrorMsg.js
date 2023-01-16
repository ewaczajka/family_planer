export const authErrorMsg = error => {
    switch (true) {
        case error.includes('email-already-in-use'):
            return 'Account connected with this email already exists.'
        case error.includes('invalid-email'):
            return 'Email address is incorrect.'
        case error.includes('user-not-found'):
            return 'There is no account connected with this email.'
        case error.includes('wrong-password'):
            return 'Incorrect password.'
        case error.includes('invalid-password'):
            return 'Password must have at least six characters.'
        case error.includes('weak-password'):
            return 'Password must have at least six characters.'
        default:
            return 'Please, enter a correct data.'
    }
}
