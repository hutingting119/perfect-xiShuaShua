function reducer(state = {"_id":0}, action) {
  switch(action.type){
    case "GETALL":
      return {
        "_id" : action._id
      };
  }
  return state;
}

module.exports = reducer;