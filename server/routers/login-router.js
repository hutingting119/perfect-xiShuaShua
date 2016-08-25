const findUsers = require('../dbs/find-users');
const express = require('express');

const router = express.Router();

router.post('/section', function (req, res) {
  const userInformation = req.body;
  findUsers(userInformation, (result) => {
    if (result.length === 0) {
      console.log("hah");
      res.json({value: "用户不存在"});
    }
    else if(result[0].password != userInformation.password){
        res.json({value: "密码错误，请重新输入"});
    }
    else{
      res.json({value: "登录成功"});
    }
  });

});

module.exports = router;