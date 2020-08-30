var socket = io();
socket.on('connect', function() {
    console.log('conected to the server');        
} );
socket.on('accion', function(data){ 
    console.log(data.message);
});
socket.on('disconnect', function(){ 
    console.log('pedimos conexion con el server');
});
socket.emit('message',{
    message:'hola mundo',
    razon:'puto el que lo lea'
},function(){
    console.log('se envio el mensaje');
});