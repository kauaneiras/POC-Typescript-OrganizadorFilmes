
//IMPORT NODE MODULES
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';


//IMPORT CUSTOM MODULES
import { SignUpType } from '../protocols/types.js';
import { signupMiddleware} from '../middlewares/signupmiddleware.js';
import { userExists, postNewUser } from '../repositories/repositories.js';

async function signupController(req: Request, res: Response){
    const SignUpData = req.body as SignUpType;
    try {
        await signupMiddleware(req, res, SignUpData);
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(SignUpData.password, salt);
        SignUpData.password = hash;
        SignUpData.passwordConfirmation = hash;

        res.locals.name = SignUpData.name;
        res.locals.email = SignUpData.email;
        res.locals.password = SignUpData.password;
        
        const userExistsResult = await userExists(res.locals.email);
        if(userExistsResult.rowCount > 0){
            return res.status(httpStatus.BAD_REQUEST).json({error: "User already exists"});
        }
        await postNewUser(res.locals.name, res.locals.email, res.locals.password);

        return res.status(httpStatus.CREATED).json({message: "User created"});

    }
    catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            error: "Internal server error"
        });
    }
}

export { signupController };
