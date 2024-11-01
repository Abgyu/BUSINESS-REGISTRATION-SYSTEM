import express from 'express'
import connectdb from './config/db.js'
import userRoutes from '../backend/Routes/UserRoutes.js';
import cors from 'cors';
import mongoose from 'mongoose';





const app = express()
app.use(cors());
app.use(express.json());

const port = 8000




app.use('/api/users', userRoutes);
connectdb()


app.listen(port , () =>{
    console.log("server is running on ${port}");
    
})