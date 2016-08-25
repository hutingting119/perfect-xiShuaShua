import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import Register from '../components/Register';
import {connect} from 'react-redux'

Register.PropTypes = {
  onAdd: PropTypes.func.isRequied,
};

const mapDispatchProps = (dispatch) => {
<<<<<<< HEAD

=======
>>>>>>> fbd9472d3d508cb35dc31051d83763089be50f95
  return {
    onAdd: (userName, email, password, repeatPassword)=> {
      dispatch({type: "REGIST", userName, email, password, repeatPassword});
    }
  }
};

<<<<<<< HEAD


=======
>>>>>>> fbd9472d3d508cb35dc31051d83763089be50f95
export default connect(()=>{return {}}, mapDispatchProps)(Register);






