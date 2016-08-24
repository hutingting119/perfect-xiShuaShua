import React, {Component} from "react";
import {Link} from 'react-router'

class BestRecommend extends React.Component {
  componentDidMount() {
    this.props.onGetBest();
  }

  render() {
    return <div>
      <RecommendRoom id={this.props.id}/>
      <RecommendTime time={this.props.time}/>
      <Reserve/>
    </div>
  }
}

class RecommendRoom extends React.Component {
  render() {
    return <div className="row middle best-room">
      <div className={this.props.id !== 0 ? "" : "hidden"}>
        <h4 className="col-md-6 text-center">房间号：{this.props.id}</h4>
      </div>
      <div className={this.props.id !== 0 ? "hidden" : ""}>
        <h4 className="col-md-6 text-center">不好意思</h4>
      </div>
    </div>
  }
}

class RecommendTime extends React.Component {
  render() {
    return <div className="row middle best-time">
      <div className={this.props.time !== 0 ? "" : "hidden"}>
        <h4 className="col-md-6 text-center">时间段：{this.props.time}:00~{this.props.time + 1}:00</h4>
      </div>
      <div className={this.props.time !== 0 ? "hidden" : ""}>
        <h4 className="col-md-6 text-center">暂无可预约房间</h4>
      </div>
    </div>
  }
}
class Reserve extends React.Component {
  render() {
    return <div className="col-md-6">
      <Link to="/bestReserve">
        <button className="btn best-button btn-lg btn-info center-block">预约</button>
      </Link>
    </div>
  }
}

export default BestRecommend;