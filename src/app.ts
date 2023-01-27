//IMPORT MODULES
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//IMPORT ROUTES
import { signupRouter } from "./routes/singuprouter.js";
<<<<<<< Updated upstream
=======
import { signinRouter } from "./routes/signinrouter.js";
import { moviesRouter } from "./routes/moviesrouter.js";
>>>>>>> Stashed changes

//INITIALIZE
dotenv.config();
const app = express();

//APP USE MODULES
app.use(cors());
app.use(express.json());

//APP USE ROUTES
app.use(signupRouter);
<<<<<<< Updated upstream
=======
app.use(signinRouter);
app.use(moviesRouter);
>>>>>>> Stashed changes

//APP LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    }
);