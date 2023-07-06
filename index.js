import express from  'express';

import { createRoom, cusDetails, readBook, readRoom, roomBooking, roomDetails } from './crud.js';


const app = express();
const port = 5000;
const host = 'localhost';

app.use(express.json());

app.get('/room',(req,res) => {
   res.send(readRoom())
})

app.get('/room/book',(req,res) => {
   res.send(readBook())
})

app.post('/room',(req,res) =>{
    const roomobj = req.body
    console.log(roomobj)
    createRoom(roomobj)
     res.send('created')
})

app.post('/room/book' , (req,res) => {
   const bookRoom = req.body
   console.log(bookRoom)
   roomBooking(bookRoom)
   res.send('created')
})

app.get('/room/details', (req,res) => {
   res.send(roomDetails())
})


app.get('/room/cusdetails',(req,res) => {
   res.send(cusDetails())
})



app.listen(port,() =>{
   console.log(`http://${host}:${port}`)
})