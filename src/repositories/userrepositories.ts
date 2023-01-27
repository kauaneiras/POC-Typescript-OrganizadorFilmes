import prisma from "../database/database.js";

async function userExists(email: string){
    const user = await prisma.users.findUnique
    ({
        where: {
            email: email
        }
    });
    return user;
}

async function postNewUser(name: string, email: string, password: string){
    const post = await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: password  
        }
    });
    return post;
}

async function userPasswordExists(email: string){
    return await prisma.users.findUnique({
        where: { email: email },
        select: { password: true }
    });

}

async function GetUserId(email: string){
    const result = await prisma.users.findUnique({
        where: { email: email },
        select: { id: true }
    });
    const userId : number = result.id;
    return userId;
}

async function singInRepository(email: string, token: string){
    const result : number = await GetUserId(email);
    const send =  await prisma.sessions.create({
        data: {
            token: token,
            user_id: result
            
        }
    });
    console.log(send)
    return send;
}



export {userExists, postNewUser, userPasswordExists, singInRepository, GetUserId};

