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

export {userExists, postNewUser};

