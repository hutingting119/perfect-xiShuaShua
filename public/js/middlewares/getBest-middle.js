import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GET_BEST') {
    request.get('/rooms')
      .end((err, res) => {
        next({type: action.type, value: res.body})
      });
  }
  else
    next(action);
};
