const reducer = require('../../public/js/reducers/reducer');
const expect = require('chai').expect;

describe('reducer', function () {
  it('get', function () {
    const state = {"_id": 0};
    const action = {type: "GETALL", "_id":1};
    expect(reducer(state, action)).to.be.deep.equal({"_id":1});
  });
});

