const express = require('express');
const bodyParser = require('body-parser');

const app = new express();

const insertUsers = require('./server/routers/register-router');
const reserveRoom = require('./server/routers/reserve-room');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use('/', insertUsers);
app.use('/',reserveRoom);

var server = app.listen(3001, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;