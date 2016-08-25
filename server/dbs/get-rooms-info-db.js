const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function getRoomsInfo(callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('rooms');
        collection.find({}).toArray(function (err, result) {
            const ableRooms = [];
            result.map(item => {
                const rooms = item.timePeriod;
                const isAble = rooms.some((room) => {
                    const time = new Date().getHours();
                    const theTime = room.time.split(':');
                    return (room.state == 0 && parseInt(theTime[0]) > time);

                });
                if (isAble) {
                    ableRooms.push({"_id": item._id, "theState": 0})
                }
                else {
                    ableRooms.push({"_id": item._id, "theState": 1})
                }
            });
            callback(ableRooms);
        });
    });
}
module.exports = getRoomsInfo;