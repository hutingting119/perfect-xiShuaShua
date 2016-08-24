const reducer = require('../../public/js/reducers/reducer');
const expect = require('chai').expect;

describe('reducer', function () {
<<<<<<< HEAD
    it('get', function () {
        const state = {value: ''};
        const action = {type: "GETTVALUE", value: 'world'};
        expect(reducer(state, action)).to.be.deep.equal({value: 'world'});
    });
=======
  it('get', function () {
    const state = {_id: 0,time:0};
    const action = {type: "GET_BEST"};
    expect(reducer(state, action)).to.be.deep.equal({_id:1,time:17});
  });
>>>>>>> 6352c262535adb70c1a20327809cbadaf5065bb0
});

