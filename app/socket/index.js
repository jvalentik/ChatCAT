/**
 * Created by Jan Valentik on 6/18/2016.
 */
'use strict';
const h = require('../helpers');

module.exports = (io, app) => {
    let allRooms = app.locals.chatrooms;

    io.of('/roomslist').on('connection', socket => {
        console.log('Socket.io connected to client');
        socket.on('getChatrooms', () => {
            socket.emit('chatRoomsList', JSON.stringify(allRooms));

        });
        socket.on('createNewRoom', newRoomInput => {
            if(!h.findRoomByName(allRooms, newRoomInput)) {
                allRooms.push({
                    room: newRoomInput,
                    roomID: h.randomHex(),
                    users: []
                });
                socket.emit('chatRoomsList', JSON.stringify(allRooms));
                socket.broadcast.emit('chatRoomsList', JSON.stringify(allRooms));
            }
        });
    });
};

