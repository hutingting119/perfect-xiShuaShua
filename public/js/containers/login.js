import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import Login from '../components/Login';
import {connect} from 'react-redux';

Login.PropTypes = {
  onJude: PropTypes.func.isRequied,
};

const mapDispatchProps = (dispatch) => {
  return {
    onJude: (userName, password)=> {
      console.log('dispatch');
      dispatch({type: "LOGIN", userName, password});
    }
  }
};


export default connect(()=> {
  return {}
}, mapDispatchProps)(Login);






