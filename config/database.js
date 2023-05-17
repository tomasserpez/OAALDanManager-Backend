const Sequelize = require('sequelize');

const Sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './danes.db'
});

module.exports = sequelize;
