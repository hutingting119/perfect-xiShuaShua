const reducer = require('../../public/js/reducers/reducer');
const expect = require('chai').expect;

describe('reducer', function () {
  it('get', function () {
    const state = {_id: 0,time:0};
    const action = {type: "GET_BEST"};
    expect(reducer(state, action)).to.be.deep.equal({_id:1,time:17});
  });
});

