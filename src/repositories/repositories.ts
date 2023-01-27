import {connection} from "../database/database.js";

async function userExists(email: string){
    return await connection.query(
        'SELECT email FROM users WHERE email = $1;',
        [email] 
    );
}

async function postNewUser(name: string, email: string, password: string){
    console.log("post new user")
    return await connection.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);',
        [name, email, password]
    );
}

async function userPasswordExists(email: string){
    const userPassword: string = (await connection.query(
        'SELECT password FROM users WHERE email = $1',
        [email]
    )).rows[0].password;

    return userPassword;
}

async function singInRepository(email: string, token: string){
    const userId: number = (await connection.query(
        'SELECT id FROM users WHERE email = $1',
        [email]
    )).rows[0].id;

    return await connection.query(
        'INSERT INTO sessions ("user_id", token) VALUES ($1, $2)',
        [userId, token]
    );
}

async function GetUserId(email: string){
    const user_id: number = (await connection.query(
        'SELECT id FROM users WHERE email = $1',
        [email]
    )).rows[0].id;
    return user_id;
}

export {userExists, postNewUser, userPasswordExists, singInRepository, GetUserId};

