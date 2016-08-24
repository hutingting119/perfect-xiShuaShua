import Header from './Header';
import React, {Component} from "react";
import {connect} from 'react-redux'

class ReserveRoom extends React.Component {

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
        console.log(data);
        return <div className="row">
            <div className="row my-bg my-write my-bottom my-height">
                <h4 className="col-xs-6 text-center">房间号</h4>
                <h4 className="col-xs-6 text-center">预约状态</h4>
            </div>
            {data.map((data)=> {
                return <div className="row my-top my-padding  my-write" key={index}>
                    <div className="col-xs-6 text-center">{JSON.stringify(data._id)}</div>
                    <div className="col-xs-6 text-center">
                        <ReactRouter.Link to="/second">
                            <button className="btn btn-info" disabled={(item.theState === 0) ? "true" : ""}>可预约
                            </button>
                        </ReactRouter.Link>
                    </div>
                </div>
            })}
        </div>
    }
}

const mapStateToProps = (state)=> {
    return {
        rooms: state.rooms
    }
};

export default connect(mapStateToProps)(ReserveRoom);