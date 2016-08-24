import React, {Component} from "react";
import Header from './Header';

class Login extends Component {
  render() {
    return (
      <div>
        <Header/>
        <LoginForm/>
      </div>
    );
  }
}

class LoginForm extends Component {
  render() {
    return (
      <div id="wrapper">
        <h1>Login</h1>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10">
            <label data-icon="u"> 用户名 </label>
            <input id="username" name="username" type="text"
                   placeholder="UserName"/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10">
            <label data-icon="p"> 密码 </label>
            <input id="password" name="password" required="required" type="password" placeholder="Password"/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="keeplogin col-xs-offset-2">

            <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping"/>
            <label >保存密码</label>
          </div>
        </div>
        <br/>
        <p className="login button">
          <input type="submit" value="Login"/>
        </p>
        <p className="col-xs-offset-9">
          忘记密码
        </p>
      </div>
    )
  }
}

export default Login ;