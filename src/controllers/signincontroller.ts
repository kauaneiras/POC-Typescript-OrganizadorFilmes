//IMPORT NODE MODULES
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { SignInType } from "../protocols/types.js";
import { signinMiddleware } from "../middlewares/signinmiddleware.js";
import {userExists, userPasswordExists, singInRepository, GetUserId} from '../repositories/userrepositories.js';

async function signupController(req: Request, res: Response){
    const SignInData = req.body as SignInType;
    try{
        await signinMiddleware(req, res, SignInData);
        const userExistsResult = await userExists(res.locals.email);
        if(userExistsResult === null){
            return res.status(httpStatus.UNAUTHORIZED).send({error: 'Email or password incorrect'});
        }
        const userPasswordExistsResult = await userPasswordExists(res.locals.email);
        const passwordMatch = await bcrypt.compare(res.locals.password, userPasswordExistsResult.password);
        if(!passwordMatch){
            return res.status(httpStatus.UNAUTHORIZED).send({error: 'Email or password incorrect'});
        }
        const token = uuidv4();
        await singInRepository(res.locals.email, token);
        res.locals.token = token;
        return res.status(httpStatus.OK).send({token: token });

    }
    catch(error){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

export { signupController };