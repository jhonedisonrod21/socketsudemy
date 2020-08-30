const {io} = require('../server');

io.on('connection', (client) => {
    client.on('disconnect', () => { 
        
    });
    client.on('message',(data,callbak)=>{
        console.log(data.message); 
        client.broadcast.emit('accion',{message:data.message})      
    });
});

setTimeout(() => {
    io.emit('accion',{
        message:'uribe paraco hpta'
    });
}, 4000);

