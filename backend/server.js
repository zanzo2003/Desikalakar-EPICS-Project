import express from 'express';
import products from './data/products.js';

const port = 8800;
const app = express();


app.get('/', (req, res)=>{
    res.send("API is running...")
})

app.get('/api/products', (req, res)=>{
    res.json(products);
})

app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p)=>p._id === req.params.id);
    res.json(product);
})

app.listen(port, ()=>{
   console.log(`server running on port ${port}`);
})