const { Sequelize } = require('sequelize');
const { Country, City, Airport } = require('./models');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'database.sqlite',
});


async function createDatabase() {
  await sequelize.sync({ force: true });
  console.log('Database created and models synced.');
}

createDatabase();