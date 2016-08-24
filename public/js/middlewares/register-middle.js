import request from "superagent";

export default store=> next=> action => {
  if (action.type === "REGIST") {
    if (typeof (action.userName[0]) === "number") {
      alert('用户名不能以数字开头');
    }
    else if (action.userName.length < 2 || action.userName.length > 6) {
      alert("用户名不能少于2位");
    } else if (action.email.split('').includes('@') === false) {
      alert("邮箱格式不正确");
    }
    else if (action.password.length < 6 || action.password.length > 20) {
      alert('请输入6-20位密码')
    }
    else if (action.password != action.repeatPassword) {
      alert("两次输入密码格式不正确");
    }
    else {
      request.post('/users')
        .send({name:action.userName, email:action.email, password:action.password, repeatPassword:action.repeatPassword})
        .end((err, res) => {
          console.log(res.body.value);
          next({type: 'REGIST', status: res.body.value})

        });
    }
  }
}