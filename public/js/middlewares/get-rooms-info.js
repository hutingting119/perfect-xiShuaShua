import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GETABLEROOMS') {
        request.get('/roomsInfo')
            .end((err, res) => {
                next({type: 'GETABLEROOMS', value: res.body})
            });
    }
    else
        next(action);
};