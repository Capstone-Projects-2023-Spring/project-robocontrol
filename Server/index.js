const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { username, password, confirmPassword, email, phone } = req.body;

  const userData = {
    username,
    password,
    confirmPassword,
    email,
    phone,
  };

  fs.writeFile(`./users/${username}.json`, JSON.stringify(userData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.status(200).send('User data saved');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
