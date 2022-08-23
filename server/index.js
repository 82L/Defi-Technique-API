const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});
const api_helper = require('./api_helper')
let apiResponse = "";
let interval;
/**
 *
 * @type {{}}
 */
// app.get('/', async (req, res) => {
//     res.send(await api_helper.make_API_call());
// });

io.on('connection', (socket) => {
    console.log('A client as connected');
    socket.emit("data",apiResponse)
    socket.on('disconnect', () => {
        console.log('A client as disconnected');
    });
});

server.listen(3000, async () => {
    console.log('listening on *:3000');
    console.log("Api called")
    apiResponse = await api_helper.make_API_call();
    console.log("api response obtained")
    interval = setInterval(async function () {
        console.log("Api called")
        apiResponse = await api_helper.make_API_call();
        console.log("api response obtained, sending to socket clients")
        io.emit("data", apiResponse);
        console.log("socket clients contacted")
    }, 3000 * 10)

});