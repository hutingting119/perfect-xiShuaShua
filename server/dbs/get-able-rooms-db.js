const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function getAbleRooms(callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('rooms');
        collection.find({}).toArray(function (err, result) {
            const ableRooms = [];
            result.map(item => {
                const time = new Date().getHours();

                const theTime = item.time.split(':');
                if (item.state == 1 || parseInt(theTime[0]) <= time) {
                    ableRooms.push({"_id": item._id, "state": 1})
                }
                else {
                    ableRooms.push({"_id": item._id, "state": 0})
                }
            });
            callback(ableRooms);
        });
    });
}

module.exports = getAbleRooms;