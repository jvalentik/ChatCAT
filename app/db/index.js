/**
 * Created by Jan Valentik on 6/12/2016.
 */
'use strict';

const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error', error => {
    console.log('MongoDB Error: ', error);
});

module.exports = {
    Mongoose
};
