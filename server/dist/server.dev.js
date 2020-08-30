"use strict";

var express = require('express');

var path = require('path');

var publicPath = path.resolve(__dirname, '../public');
var port = process.env.PORT || 3000;

var app = require('express')();

var server = require('http').createServer(app);

var socketIO = require('socket.io');

module.exports.io = socketIO(server);

require('./sockets/socket');

app.use(express["static"](publicPath));
server.listen(port, function (err) {
  if (err) throw new Error(err);
  console.log("Servidor corriendo en puerto ".concat(port));
});