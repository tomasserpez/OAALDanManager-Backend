const Sequelize = require('sequelize');
const path = require('path');

const databasePath = path.join(__dirname, 'danes.db');
console.log('Ruta de la base de datos:', databasePath);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'danes.db')
});

module.exports = sequelize;
