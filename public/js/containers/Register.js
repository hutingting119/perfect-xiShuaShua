import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import Register from '../components/Register';
import {connect} from 'react-redux'

Register.PropTypes = {
  onAdd: PropTypes.func.isRequied,
};

const mapDispatchProps = (dispatch) => {
  return {
    onAdd: (userName, email, password, repeatPassword)=> {
      dispatch({type: "REGIST", userName, email, password, repeatPassword});
    }
  }
};

export default connect(()=>{return {}}, mapDispatchProps)(Register);






