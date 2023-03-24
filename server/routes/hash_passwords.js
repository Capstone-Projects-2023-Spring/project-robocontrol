const bcrypt = require('bcrypt');
const fs = require('fs');
const usersJson = require('./users.json');
const users = Array.isArray(usersJson) ? usersJson : [];

(async () => {
  const saltRounds = 10;
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    console.log(`Hashed password for ${user.username}: ${hashedPassword}`);
    user.password = hashedPassword;
  }
  fs.writeFileSync('./users.json', JSON.stringify(users, null, 2), 'utf-8');
})();
