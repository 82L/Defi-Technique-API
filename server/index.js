const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const api_helper = require('./api_helper')

app.get('/', async (req, res) => {
    res.send(await api_helper.make_API_call("landon"));
});

io.on('connection', (socket) => {
    console.log('A client as connected');
    socket.on('disconnect', () => {
        console.log('A client as disconnected');
    });
});


server.listen(3000, () => {
    console.log('listening on *:3000');
});