const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const usersJson = require('./users.json');
const users = Array.isArray(usersJson) ? usersJson : [];


app.post('/signup', (req, res) => {
  const { username, password, confirmPassword, email, phone } = req.body;

  if (password !== confirmPassword) {
    res.status(400).send('Passwords do not match');
    return;
  }

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    res.status(409).send('User with this username already exists');
    return;
  }

  const newUser = { username, password, email, phone };
  users.push(newUser);

  fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error('Error writing to users.json:', err);
      res.status(500).send('Error saving user data');
    } else {
      console.log('User data saved');
      res.status(201).send('User data saved');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
