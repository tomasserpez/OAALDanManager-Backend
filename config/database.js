const Sequelize = require('sequelize');
const path = require('path');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'danes.db')
});

module.exports = sequelize;
