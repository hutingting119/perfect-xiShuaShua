import request from "superagent";

export default store=> next=> action => {
  console.log("store");
  if (action.type === "LOGIN") {
    console.log("action");
    if(action.userName === ''){
      alert('用户名不能为空')
    }
    else if (action.password === '') {
      alert("密码不能为空");
    }
    else {
      request.post('/section')
        .send({name:action.userName, password:action.password})
        .end((err, res) => {
          next({type: 'LOGIN', status: res.body.value})
        });
    }
  }
}