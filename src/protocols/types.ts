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

type SessionCreate = {
    userId: number,
    token: string
}

export {SignUpType, SignInType, SessionCreate};

