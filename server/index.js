const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const {addUser, getUsersInRoom, removeUser, getUser} = require('./users');

io.on('connection', function (socket) {

    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({name, room, id: socket.id});
        if (error) {
            return callback(error);
        }

        socket.join(user.room);
        socket.emit('message', {user: 'admin', text: `${user.name}, welcome in chat ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} joined to chat`});
        io.to(user.room).emit('usersInRoom', getUsersInRoom(user.room));

        callback();
    });

    socket.on('send message', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message});
        callback();
    })

    socket.on('disconnect', () => {
        const removedUser = removeUser(socket.id);
        if (removedUser) {
            socket.to(removedUser.room).emit('message', {user: 'admin', text: `${removedUser.name} leaved chat`});
            io.to(removedUser.room).emit('usersInRoom', getUsersInRoom(removedUser.room));
        }
    })
})

server.listen(5000, () => {
    console.log('Server on 5000 port')
});





