import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GET_ABLE_ROOMS') {
    request.get('/roomsInfo')
      .end((err, res) => {
        next({type: 'GET_ABLE_ROOMS', value: res.body})
      });
  }
  else
    next(action);
};
