import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import BestRecommend from "../components/BestRecommend";

const mapStateToProps = (state)=> {
  return {
    id: state.id,
    time: state.time
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBest: ()=> {
      dispatch({type: "GET_BEST"});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestRecommend);
