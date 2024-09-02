
import express from 'express';
import { connectDb } from './backend/framework/config/db';
import dotenv from 'dotenv';


const app = express();
dotenv.config()



connectDb();

app.listen(3000, (): void => {
    console.log("Listening on port 3000");
});
