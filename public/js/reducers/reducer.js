function reducer(state = {rooms: []}, action) {
  switch (action.type) {
    case 'GETABLEROOMS' :
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