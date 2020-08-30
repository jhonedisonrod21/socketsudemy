const express = require('express');
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = require('express')();
const server = require('http').createServer(app);
const socketIO = require('socket.io');
module.exports.io = socketIO(server);
require('./sockets/socket');


app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});