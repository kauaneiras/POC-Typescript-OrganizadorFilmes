import { Request, Response, NextFunction } from "express";
import { signinSchema } from "../schemas/schemas.js";
import { SignInType } from "../protocols/types.js";
import httpStatus from "http-status";
import { stripHtml } from "string-strip-html";

async function signinMiddleware(req: Request, res: Response, SignInType: SignInType) {
    const email: string = stripHtml(SignInType.email).result.trim();
    const password: string = stripHtml(SignInType.password).result.trim();
    const { error } = signinSchema.validate({ email, password });
    if (error) {
        return res.status(httpStatus.BAD_REQUEST).send({ error: error.details[0].message });
    }
    res.locals.email = email;
    res.locals.password = password;
}

export { signinMiddleware };
