import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import BestCommend from "../components/BestRecommend";


BestCommend.propTypes = {
  onReserve: PropTypes.func.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(BestCommend);
