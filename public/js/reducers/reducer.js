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
    }
  }

  return state;
}
module.exports = reducer;