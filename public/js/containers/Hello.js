import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Value from "../components/Hello";

Value.propTypes = {
  _id: PropTypes.number.isRequired,
  onGet: PropTypes.func.isRequired
};

const mapStateToProps = (state)=> {
  return {
    "_id": state._id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGet: ()=> {
      dispatch({type: "GETALL"});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Value);
