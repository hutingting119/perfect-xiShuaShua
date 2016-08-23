import React, {Component} from "react";

class Header extends Component {
  render() {
    return <div className='container-fluid header row'>
      <div className="col-xs-4"><span className="glyphicon glyphicon-user">个人中心</span></div>
      <div className="col-xs-4 text-center"><span>洗刷刷</span></div>
      <div className="col-xs-4 text-right"><span>logo</span></div>
    </div>
  }
}

export default Header;