import express from 'express';
import http from "http";
import { Socket } from "socket.io";

const app = express()
const server = http.createServer(app);

const io = new Socket(server);

io.on('conn', (socket)=>{
    console.log('socket connected', socket.id)
})




// port
const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`listing port on ${PORT}`))
