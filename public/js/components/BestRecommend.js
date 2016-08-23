import React, {Component} from "react";

class BestRecommend extends React.Component{
  render(){
    return <div>
      <RecommendRoom/>
      <RecommendTime/>
      <Reserve/>
    </div>
  }
}

class RecommendRoom extends React.Component{
  render(){
    return <div className="row middle best-room">
      <h4 className="col-md-6 text-center">房间号:1号</h4>
    </div>
  }
}

class RecommendTime extends React.Component{
  render(){
    return <div className="row middle best-time">
      <h4 className="col-md-6 text-center">时间段：17:00~18:00</h4>
    </div>
  }
}
class Reserve extends React.Component{
  render(){
    return <div className="col-md-6">
      <button className="btn best-button btn-lg btn-info center-block">预约</button>
    </div>
  }
}
export default BestRecommend;