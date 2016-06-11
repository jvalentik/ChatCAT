/**
 * Created by Jan Valentik on 6/11/2016.
 */
'use strict';
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('login');
});

app.listen(app.get('port'), () => console.log('ChatCAT running on Port: ', app.get('port')));
