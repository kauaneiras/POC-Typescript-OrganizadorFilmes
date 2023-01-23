type SignUpType = {
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

type SignInType = {
    email: string,
    password: string
}

export {SignUpType, SignInType};

