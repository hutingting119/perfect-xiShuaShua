const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findData(callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('rooms');
    collection.find({}).toArray(function (err, result) {
      console.log(result);
      callback(result[0]._id);
    });
  });
}

module.exports = findData;