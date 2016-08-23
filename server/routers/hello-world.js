const findData = require('../dbs/find-from-db');
const getAbleRooms = require('../dbs/get-able-rooms-db');

const express = require('express');

const router = express.Router();

router.get('/hello', (req, res)=> {
    findData((result) => {
        res.json(result);
    });
});

router.get('/ableRooms', (req, res) => {
    getAbleRooms((result) => {
        res.json(result);
    })
});

module.exports = router;
