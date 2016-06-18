/**
 * Created by Jan Valentik on 6/11/2016.
 */
'use strict';
require('./auth')();

module.exports = {
    router: require('./routes')(),
    session: require('./session')
};
