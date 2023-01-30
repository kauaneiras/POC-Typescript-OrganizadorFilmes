import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import prisma from "../database/database.js";


async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token: string = req.headers.authorization?.replace("Bearer ", "");

    if(!token){return res.sendStatus(httpStatus.UNAUTHORIZED);}

    try {

        const hasSession = await prisma.sessions.findMany({where: { token: token }});
        if(hasSession.length === 0) {return res.sendStatus(httpStatus.UNAUTHORIZED);}
        
        const userId = await prisma.sessions.findUnique({ select: { user_id: true }, where: { token: token }});
        const hasUser = await prisma.users.findUnique({ where: { id: userId.user_id }});

        if(!hasUser){return res.sendStatus(httpStatus.UNAUTHORIZED);}

        res.locals.userId = userId;
        res.locals.token = token;
        next();
    } 
    catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export {authMiddleware};