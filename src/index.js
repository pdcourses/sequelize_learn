const { User } = require('./db/models');
/*
User.create({
  firstName: 'Vasya',
  lastName: 'Ivanov',
  email: 'vasya123@mail.com',
}).then(console.log);
*/
User.findByPk(1).then(console.log);
