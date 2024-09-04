import express from 'express';
import { connectDb } from './backend/framework/config/db';
import dotenv from 'dotenv';
import userRoutes from './backend/Router/userRoutes';
import cors from 'cors';

const app = express();
dotenv.config();

connectDb();
app.use(cors()); 

app.use(express.json());  
app.use('/users', userRoutes);

app.listen(3000, (): void => {
    console.log("Listening on port 3000");
});
