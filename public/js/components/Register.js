import React, {Component} from "react";
import Header from "./Header";
import {Router, Route, Link} from "react-router";

class Register extends Component {
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
                <input type='text' placeholder="用户名" className="form-control myUsers"/>
              </label>
            </div>
            <div className="email">
              <label>
                <input type="email" placeholder="邮箱" className="form-control  myEmail"/>
              </label>
            </div>
            <div className="password">
              <label>
                <input type="password" placeholder="密码" className="form-control myPassword"/>
              </label>
            </div>
            <div className="repeatPassword">
              <label>
                <input type="password" placeholder="确认密码" className="form-control myRepeatPassword"/>
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className=" form-control btn btn-xs btn-info  registerButton">注册</button>
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