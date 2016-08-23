const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {
<<<<<<< HEAD:test/apis/server-test.js
        const collection = db.collection('rooms');
        collection.removeMany({},()=>{
          collection.insert([{ "_id" : 1, "room" :
              [{ "time" : "17:00-18:00", "state" : "0" },
                { "time" : "18:00-19:00", "state" : "0" },
                { "time" : "19:00-20:00", "state" : "0" },
                { "time" : "20:00-21:00", "state" : "0" },
                { "time" : "21:00-22:00", "state" : "0" }]}],
            (err, result)=> {
              db.close();
              done();
            });
        });
=======
      const collection = db.collection('users');
      collection.insert([{'name':'guoru','password':'123456'}], (err, result)=> {
>>>>>>> 147d1bbd5526d6d4beabb477af64a8607f85f89b:test/apis/insert-users-test.js
      });
    server = require('../../server');
  });

<<<<<<< HEAD:test/apis/server-test.js

  it('responds to /rooms', function testSlash() {
    request(server)
      .get('/rooms')
      .expect(200, '_id:1');
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
>>>>>>> 147d1bbd5526d6d4beabb477af64a8607f85f89b:test/apis/insert-users-test.js

  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });


  });




