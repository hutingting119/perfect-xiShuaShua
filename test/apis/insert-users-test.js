const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;
  beforeEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.insert([{'name': 'guoru', 'password': '123456'}], (err, result)=> {
      });
      db.close();
    });

    afterEach(function () {
      mongoClient.connect(url, (err, db)=> {
        const collection = db.collection('hello');
        collection.removeMany({});
        db.close();
      })
    });

    it('responds to /hello', function testSlash() {
      request(server)
        .get('/hello')
        .expect(200, '"world"');

    });
  })
})