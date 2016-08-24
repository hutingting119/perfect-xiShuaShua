import request from 'superagent';

export default store => next => action => {
  console.log(action.type);
  if (action.type === 'GET_ABLE_ROOMS') {
     request.get('/roomsInfo')
      .end((err, res) => {
        next({type: 'GET_ABLE_ROOMS', value: res.body})
      });
  }
  else
    next(action);
};