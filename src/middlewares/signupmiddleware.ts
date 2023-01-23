//IMPORT NODE MODULES
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { stripHtml } from 'string-strip-html';

//IMPORT CUSTOM MODULES
import { SignUpType } from '../protocols/types.js';
import { signupSchema } from '../schemas/schemas.js';


async function signupMiddleware(req: Request, res: Response, SignUpType: SignUpType){
    try {
        if(!SignUpType.name || !SignUpType.email || !SignUpType.password || !SignUpType.passwordConfirmation){
            return res.status(httpStatus.BAD_REQUEST).json({error: "All fields are required"});
        }
        if(SignUpType.password !== SignUpType.passwordConfirmation){
            return res.status(httpStatus.BAD_REQUEST).json({error: "Password and password confirmation must be the same"});
        }

        const name: string = stripHtml(SignUpType.name).result.trim();
        const email: string = stripHtml(SignUpType.email).result.trim();
        const password: string = stripHtml(SignUpType.password).result.trim();
        const passwordConfirmation: string = stripHtml(SignUpType.passwordConfirmation).result.trim();

       
        const { error } = signupSchema.validate({name, email, password, passwordConfirmation});
        if(error){
            return res.status(httpStatus.BAD_REQUEST).json({error: error.details[0].message});
        }

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            error: "Internal server error"
        });
    }

}

export { signupMiddleware };