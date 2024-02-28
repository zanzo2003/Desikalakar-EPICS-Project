import express from 'express';
import dotenv, { config } from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from  './routes/productRoutes.js';

const port = process.env.PORT || 8800; 

connectDB();
const app = express();


app.get('/', (req, res)=>{
    res.send("API is running...")
})

app.use ('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
   console.log(`server running on port ${port}`);
})