import React, {Component} from "react";
import Header from "./Header";
import {Router, Route, Link} from "react-router";

class Register extends Component {

  add() {
    const userName = this.refs.userName.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const repeatPassword = this.refs.repeatPassword.value;

    this.props.onAdd(userName, email, password, repeatPassword);

  }

  render() {
    return (
      <div>
        <Header />
        <div className="text-center registerImg">
          <h2 className="registerFont">用户注册</h2>
        </div>
        <form className="register text-center">
          <div className="form-group">
            <div className="users">
              <label>
                <input ref='userName' id="userName" type='text' placeholder="用户名" className="form-control myUsers"/>
                <small>2-14个字符,英文,数字或中文</small>
              </label>
            </div>
            <div className="email">
              <label>
                <input ref="email" type="email" placeholder="邮箱" className="form-control  myEmail"/>
                <small>请输入您的正常邮箱</small>
              </label>
            </div>
            <div className="password">
              <label>
                <input ref="password" type="password" placeholder="密码" className="form-control myPassword"/>
                <small>6-20个字符，区分大小</small>
              </label>
            </div>
            <div className="repeatPassword">
              <label>
                <input ref="repeatPassword" type="password" placeholder="确认密码" className="form-control myRepeatPassword"/>
                <small>请再次输入密码</small>
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className=" form-control btn btn-xs btn-info  registerButton"
                    onClick={this.add.bind(this)}>马上注册
            </button>
            <div className="hasAccount">
              <Link to='/login'>已有帐号?马上登录</Link>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default Register;