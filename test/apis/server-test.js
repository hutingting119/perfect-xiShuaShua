const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('rooms');
      collection.insert([{ "_id" : 1, "room" : [ { "time" : "17:00-18:00", "state" : "0" }, { "time" : "18:00-19:00", "state" : "0" }, { "time" : "19:00-20:00", "state" : "0" },
        { "time" : "20:00-21:00", "state" : "0" }, { "time" : "21:00-22:00", "state" : "0" } ] }],
        (err, result)=> {
      });
      db.close();
    });
    server = require('../../server');
  });

  afterEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('rooms');
      collection.removeMany({});
      db.close();
    })
  });

  it('responds to /rooms', function testSlash() {
    request(server)
      .get('/rooms')
      .expect(200, '[{ "_id" : 1, "room" : [ { "time" : "17:00-18:00", "state" : "1" }, { "time" : "18:00-19:00", "state" : "1" }, { "time" : "19:00-20:00", "state" : "1" }, { "time" : "20:00-21:00", "state" : "1" }, { "time" : "21:00-22:00", "state" : "1" } ] }]');

  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
