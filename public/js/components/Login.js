import React, {Component} from "react";
import Header from './Header';

class Login extends Component {
  jude(){
    console.log("jude");
    const userName = this.refs.username.value;
    const password = this.refs.password.value;

    this.props.onJude(userName,password);
  }

  render() {
    return (
      <div>
        <Header/>
        <div id="wrapper">
          <h1>Login</h1>
          <div className="row">
            <div className="col-xs-offset-1 col-xs-10">
              <label data-icon="u"> 用户名 </label>
              <input id="username" name="username" type="text"
                     placeholder="UserName" ref="username"/>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-xs-offset-1 col-xs-10">
              <label data-icon="p"> 密码 </label>
              <input id="password" name="password" required="required" type="password" placeholder="Password" ref="password"/>
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
            <button type="submit" className=" form-control btn btn-xs btn-info  registerButton" value="Login" onClick={this.jude.bind(this)}/>
          </p>
          <p className="col-xs-offset-9">
            忘记密码
          </p>
        </div>
      </div>
    )
  }
}

export default Login ;