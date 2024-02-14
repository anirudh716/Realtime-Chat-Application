import { Server } from 'socket.io';
const io = new Server(8000);
const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit("user-joined", name);
    });
    // when a user sends a message
    socket.on('send', message => {
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

    //when a user disconnect
    socket.on('disconnect', () =>{
        const disconnectedUser = users[socket.id];
        socket.broadcast.emit('user-left', disconnectedUser);
        delete users[socket.id];
    })
});