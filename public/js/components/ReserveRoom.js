import Header from './Header';
import React, {Component}  from "react";
import {Link} from "react-router";

class ReserveRoom extends React.Component {

  componentDidMount() {
    this.props.onGetRooms();
  }

  render() {
    return <div>
      <Header/>
      <RoomsList rooms={this.props.rooms}/>
    </div>;
  }
}

class RoomsList extends React.Component {

  render() {
    const data = this.props.rooms;
    return <div className="row">
      <div className="row my-bg my-write my-bottom my-height">
        <h4 className="col-xs-6 text-center">房间号</h4>
        <h4 className="col-xs-6 text-center">预约状态</h4>
      </div>
      {data.map((item, index)=> {
        return <div className="row my-top my-padding  my-write" key={index}>
          <div className="col-xs-6 text-center">{item._id}</div>
          <div className="col-xs-6 text-center">
            <Link to="/reserveTime">
              <button className="btn btn-info"
                      disabled={(item.theState === 1) ? "true" : ""}>可预约
              </button>
            </Link>
          </div>
        </div>
      })}
    </div>
  }
}


export default ReserveRoom;