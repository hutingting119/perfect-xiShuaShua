const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
    let server;

<<<<<<< HEAD:test/apis/server-test.js
    beforeEach(function () {
        mongoClient.connect(url, (err, db)=> {
            const collection = db.collection('hello');
            collection.insert([{hello: "world"}], (err, result)=> {
            });
            db.close();
        });
        server = require('../../server');
=======
  beforeEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.insert([{'name':'guoru','password':'123456'}], (err, result)=> {
      });
      db.close();
>>>>>>> 8069bb6b1f80624fd976dc99751193738389b8c0:test/apis/insert-users-test.js
    });

<<<<<<< HEAD:test/apis/server-test.js
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
=======
  afterEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({});
      db.close();
    })
  });

  it('responds to /users', function testSlash() {
    request(server)
      .get('/users')
      .expect(200, [{'name':'guoru','password':'123456'}]);
>>>>>>> 8069bb6b1f80624fd976dc99751193738389b8c0:test/apis/insert-users-test.js

    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });

    it('responds to /ableRooms', function testPaths() {
        request(server)
            .get('/ableRooms')
            .expect(200, '"{value:[{"_id" : 1,"state" :"0"},{"_id":2 ,"state" : 0},{"_id":3, "state" : 1}]}"')
    })
});
