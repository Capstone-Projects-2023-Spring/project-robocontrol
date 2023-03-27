import { Router } from 'express';
import { writeFile } from 'fs';
import usersJson from './users.json';

var router = Router();
const users = Array.isArray(usersJson) ? usersJson : [];

router.post('/', (req, res) => {
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
  
    writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error('Error writing to users.json:', err);
        res.status(500).send('Error saving user data');
      } else {
        console.log('User data saved');
        res.status(201).send('User data saved');
      }
    });
  });