import dotenv from "dotenv";
import pg from "pg";

const {Pool} = pg;

dotenv.config();

const databaseConfig = {connectionString: process.env.DATABASE_URL};

const connection = new Pool(databaseConfig);

export {connection};