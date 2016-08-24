import React, {Component} from "react";

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
      <h4 className="col-md-6 text-center">房间号:{this.props.id}号</h4>
    </div>
  }
}

class RecommendTime extends React.Component {
  render() {
    return <div className="row middle best-time">
      <h4 className="col-md-6 text-center">时间段：{this.props.time}:00~{this.props.time + 1}:00</h4>
    </div>
  }

}
class Reserve extends React.Component {
  render() {
    return <div className="col-md-6">
      <button className="btn best-button btn-lg btn-info center-block" onClick={this.props.onReserve}>预约</button>
    </div>
  }
}
export default BestRecommend;