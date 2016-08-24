const reducer = require('../../public/js/reducers/reducer');
const expect = require('chai').expect;

describe('reducer', function () {
    it('getAbleRooms', function () {
        const state = {value: ''};
        const action = {
            type: "GET_ABLE_ROOMS", value: [{"_id": 1, "state": 0}, {"_id": 2, "state": 0}, {"_id": 3, "state": 1}]
        };
        expect(reducer(state, action)).to.be.deep.equal({
          rooms: [{"_id": 1, "state": 0}, {"_id": 2, "state": 0}, {"_id": 3, "state": 1}]
        })
    })
});
