const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('bestRecommend-test API', () => {
  let server;

  beforeEach((done)=> {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('rooms');
      collection.removeMany({}, ()=> {
        collection.insert([{
            "_id": 1, "timePeriod": [{"time": "17:00-18:00", "state": "0"},
              {"time": "18:00-19:00", "state": "0"},
              {"time": "19:00-20:00", "state": "0"},
              {"time": "20:00-21:00", "state": "0"},
              {"time": "21:00-22:00", "state": "0"}]
          }
          ],
          (err, result)=> {
            db.close();
            done();
          });
      });
    });
  });

  // it('returns reservable rooms', (done) => {
  //   request(server)
  //     .get('/rooms')
  //     .expect(200, [{
  //       "_id": 1, "timePeriod": [{"time": "17:00-18:00", "state": "0"},
  //         {"time": "18:00-19:00", "state": "0"},
  //         {"time": "19:00-20:00", "state": "0"},
  //         {"time": "20:00-21:00", "state": "0"},
  //         {"time": "21:00-22:00", "state": "0"}]
  //     }
  //     ]).end(done());
  // })
});