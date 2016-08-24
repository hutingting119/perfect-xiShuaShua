const insertUsers = require('../dbs/insert-user');
const findUsers = require('../dbs/find-users');
const express = require('express');

const router = express.Router();

router.post('/users', function (req, res) {
  const userInformation = req.body;
  findUsers(userInformation, (result)=> {
    if (result.length !== 0) {
      res.json({value: "用户已存在"});
    }
    else {
      insertUsers(userInformation, (result)=> {
        console.log(result);
        res.json({value: "注册成功"});
      });
    }
  });

});

module.exports = router;