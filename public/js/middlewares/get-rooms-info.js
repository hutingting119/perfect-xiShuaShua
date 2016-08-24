import request from 'superagent';

export default store => next => action => {
  console.log(11);
  console.log(action.type);
  if (action.type === 'GETABLEROOMS') {
     request.get('/roomsInfo')
      .end((err, res) => {
        console.log(111);
        next({type: 'GETABLEROOMS', value: res.body})
      });
  }
  else
    next(action);
};