import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ReserveRoom from "../components/ReserveRoom";

const mapStateToProps = (state)=> {
  return {
    rooms: state.rooms
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    onGetRooms:(text) => {
      console.log('dispatch');
      dispatch({
        type : "GETABLEROOMS",
        text
      })

    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReserveRoom);

