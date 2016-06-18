/**
 * Created by Jan Valentik on 6/18/2016.
 */
'use strict';

module.exports = (io, app) => {
    let allRooms = app.locals.chatrooms;
    allRooms.push({
        room: 'Good Food',
        roomID: '0001',
        users: []
    });

    allRooms.push({
        room: 'Cloud Computing',
        roomID: '0002',
        users: []
    });
    io.of('/roomslist').on('connection', socket => {
        console.log('Socket.io connected to client');
        socket.on('getChatrooms', () => {
            socket.emit('chatRoomsList', JSON.stringify(allRooms));

        });

    });

};

