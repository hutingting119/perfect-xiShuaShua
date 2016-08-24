function reducer(state = {id: 0, time: 0}, action) {
  switch (action.type) {
    case "GET_ALL":
      return {
        _id: action.id
      };
    case "GET_BEST":
      return {
        id: action.value.id,
        time: action.value.time
      };
  }
  return state;
}

module.exports = reducer;