import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import todoRoutes from './routes/todoRoutes';
import userRoutes from './routes/userRoutes';
require('dotenv').config();


const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;
const PORT = process.env.PORT || 4000;


const app = express();

app.use(express.urlencoded({ 
    extended: true,
}));
app.use(express.json());
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Todo API</h1>')
});


app.use('/todo', todoRoutes);
app.use('/user', userRoutes);

// Initi server
async function initServer() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.fs7xvww.mongodb.net/?retryWrites=true&w=majority`);
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        })
    } catch (err: any) {
        console.log(err);
    }
}
initServer()