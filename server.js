const express = require('express');
const bodyParser = require('body-parser');

const app = new express();

const bestRecommend = require('./server/routers/best-recommend');
const insertUsers = require('./server/routers/register-router');
const reserveRoom = require('./server/routers/reserve-room');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use('/', insertUsers);
app.use('/',reserveRoom);
app.use('/',bestRecommend);

var server = app.listen(3000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;