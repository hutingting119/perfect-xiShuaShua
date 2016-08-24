const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('rooms' ,() => {

  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {

      const collection = db.collection('rooms');
      collection.removeMany({}, () =>{
        collection.insert([
          {
            '_id':'1',
            timePeriod:[{
              'time':'17:00-18:00',
              'state':'0'
            }]
          }, {
            '_id':'2',
            timePeriod:[{
              'time':'17:00-18:00',
              'state':'1'
            }]
          },
        ], (err, result)=> {
          db.close();
          done();
        });
      })
    });
    server = require('../../server');
  });

  it('returns reservable rooms' ,() => {
    request(server)
      .get('/rooms')
      .expect(200, [{'_id':'1',state:'0'},{'_id':'2',state:'1'}]);
  })

});