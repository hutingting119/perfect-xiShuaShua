const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function insertUsers(userInformation, callback) {

  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('users');

    collection.insert(userInformation, function (err, result) {
        callback(result);
      }
    );
  });
}

module.exports = insertUsers;