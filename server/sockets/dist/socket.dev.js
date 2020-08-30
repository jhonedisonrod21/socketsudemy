"use strict";

var _require = require('../server'),
    io = _require.io;

io.on('connection', function (client) {
  client.on('disconnect', function () {});
  client.on('message', function (data, callbak) {
    console.log(data.message);
    client.broadcast.emit('accion', {
      message: data.message
    });
  });
});
setTimeout(function () {
  io.emit('accion', {
    message: 'uribe paraco hpta'
  });
}, 4000);