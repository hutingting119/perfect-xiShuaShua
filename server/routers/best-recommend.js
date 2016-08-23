const findBestRoom = require('../dbs/find-best-db');

const express = require('express');

const router = express.Router();

router.get('/rooms', (req, res)=> {
  findBestRoom((result) => {
      const rooms = result;
      const correntDate = new Date();
      const correntTime = correntDate.getHours();
      const emptyRooms = rooms.filter((room)=>room.timePeriod.some((time)=>time.state === '0'));
      const canRecommends = emptyRooms.map((room)=> {
        return {
          id: room._id,
          time: room.timePeriod.find(tp => tp.state === '0' && parseInt(tp.time.split(":")[0]) > correntTime).time,
        }
      });

      for (let type of canRecommends) {
        type.time = parseInt(type.time.split(':'));

      }

      for (let i = canRecommends.length - 1; i > 0; i--) {
        if (canRecommends[i].time < canRecommends[i - 1].time) {
          canRecommends[i - 1] = canRecommends[i];
        }
      }
      const bestRoom={id:canRecommends[0].id,time:canRecommends[0].time};

    res.json(bestRoom);
  });
});

module.exports = router;
