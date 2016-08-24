import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ReserveRoom from "../components/reserveRoom";

const mapStateToProps = (state)=> {
  return {
    value: state.value
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReserveRoom);

