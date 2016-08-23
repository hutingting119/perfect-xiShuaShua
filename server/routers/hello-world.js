const findData = require('../dbs/find-from-db');

const express = require('express');

const router = express.Router();

router.get('/rooms', (req, res)=> {
  findData((result) => {
    res.json(result);
  });
});

module.exports = router;
