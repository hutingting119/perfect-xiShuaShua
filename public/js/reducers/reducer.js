function reducer(state = {id: 0, time: 0, rooms: []}, action) {
  switch (action.type) {
    case "SET_BEST":
      return {
        id: action.value.id,
        time: action.value.time
      };
    case 'GET_ABLE_ROOMS' :
      return {
        rooms: action.value,
      };

    case 'REGIST': {
      alert(action.status);
<<<<<<< HEAD
      }
    case 'LOGIN':{
      console.log(action.status);
      alert(action.status);
    }
=======
>>>>>>> fbd9472d3d508cb35dc31051d83763089be50f95
    }
  }

  return state;
}
module.exports = reducer;