//IMPORT MODULES
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//IMPORT ROUTES

//INITIALIZE
dotenv.config();
const app = express();

//APP USE MODULES
app.use(cors());
app.use(express.json());

//APP USE ROUTES

//APP LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    }
);