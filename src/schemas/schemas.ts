import joi from "joi";

const signupSchema = joi.object({
    email: joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'br']}}).required(),
    name: joi.string().min(3).required(),
    password: joi.string().min(6).required(),
    passwordConfirmation: joi.string().min(6).required()
});

const signinSchema = joi.object({
    email: joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'br']}}).required(),
    password: joi.string().min(6).required()
});

export {signupSchema, signinSchema};
