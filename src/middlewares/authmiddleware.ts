import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import prisma from "../database/database.js";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token: string = req.headers.authorization?.replace("Bearer ", "");

    if(!token){
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    try {

        const hasSession = await prisma.sessions.findFirst({
            where: {
                token: token
            }
        });

        if(hasSession === null){
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        const userIdd = (await prisma.sessions.findFirst({
            select: {
                user_id: true
            },
            where: {
                token: token
            }
        }))

        const userId = userIdd.user_id;

        const hasUser = await prisma.users.findFirst({
            where: {
                id: userId
            }
        });

        if (hasUser === null) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        res.locals.userId = userId;
        res.locals.token = token;

        next();
    } catch (error) {
        console.error(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export {authMiddleware};