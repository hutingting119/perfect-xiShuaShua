function reducer(state = {id: 0, time: 0}, action) {
  switch (action.type) {
    case "GET_BEST":
      return {
        id: action.value.id,
        time: action.value.time
      };

    case 'REGIST': {
      alert(action.status);
    }
  }

  return state;
}
module.exports = reducer;