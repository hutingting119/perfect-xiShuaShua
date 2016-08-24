const reducer = require('../../public/js/reducers/reducer');
const expect = require('chai').expect;

describe('reducer', function () {
  it('get', function () {
    const state = {id: 1,time:17};
    const action = {type: "GET_BEST",value:{id:state.id,time:state.time}};
    expect(reducer(state, action)).to.be.deep.equal({id:1,time:17});
  });
});

