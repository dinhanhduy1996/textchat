const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {origin: "*"}
});



/*  */
    io.on('connection',(socket)=>{
        /* phấn của socket io, socket.on là nhận, io.mit là gởi */
            socket.on('chat message', function(msg){
            io.emit('chat message',msg);
            console.log(msg);
        /*  */
        /* thêm vào database */
  
        /*  */
            });
        });

    const port = process.env.PORT || 5000;
server.listen(port,()=>{
    console.log('server dang chay');

});
