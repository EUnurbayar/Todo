import  express, {json} from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import usersRouter from './routers/usersRouter.js';
import todosRouter from './routers/todosRouter.js'

dotenv.config();
const app = express();
await mongoose.connect('mongodb://127.0.0.1:27017/todoApp');
console.log(`connected to MongoDB todoApp✨`);



app.use(morgan('dev'));
app.use(json());

app.use('/users', usersRouter);
app.use('/todos', todosRouter);


app.all('*',(req, res, next) => next(new Error(`Route not found!`)));
app.use((error, req, res, next) => res.status(500).json({success: false, data: error.message}));


app.listen(3000, ()=>{
    console.log('app listening on 3000🌟');
});

