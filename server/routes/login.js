var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const usersJson = require('./users.json');
const users = Array.isArray(usersJson) ? usersJson : [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (user && await bcrypt.compare(password, user.password)) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;
