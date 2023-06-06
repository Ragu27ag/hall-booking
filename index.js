import express from  'express';

import { createRoom } from './crud.js';


const app = express();
const port = 5000;
const host = 'localhost';


app.post('/room',(req,res) =>{
    const roomobj = req.body
    res.send(createRoom(roomobj))
})




app.listen(port,() =>{
   
})