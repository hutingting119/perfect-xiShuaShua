const findData = require('../dbs/find-from-db');
const getRoomsInfo = require('../dbs/get-rooms-info-db');

const express = require('express');

const router = express.Router();

router.get('/hello', (req, res)=> {
    findData((result) => {
        res.json(result);
    });
});

router.get('/roomsInfo', (req, res) => {
    getRoomsInfo((result) => {
        res.json(result);
    })
});

module.exports = router;
