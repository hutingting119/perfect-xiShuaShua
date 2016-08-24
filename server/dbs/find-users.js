const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findUsers(userInformation, callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('users');
    const userName = userInformation.name;

    collection.find({name:userName}).toArray(function (err, result) {
      console.log(result);
      callback(result);
    });
  })
}

module.exports = findUsers;