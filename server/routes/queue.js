var express = require('express');
var router = express.Router();

const waitingQueue = require('../waiting_queue');

router.post('/join', function (req, res, next) {
  const { username } = req.body;
  waitingQueue.add(username);
  res.status(200).send({ message: 'Joined the waiting queue.' });
});

router.get('/info', function (req, res, next) {
  const { username } = req.query;
  const position = waitingQueue.getPosition(username);
  const total = waitingQueue.get_length();
  res.status(200).send({ position, total });
});

module.exports = router;
