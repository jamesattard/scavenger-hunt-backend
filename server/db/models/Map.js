const Sequelize = require('sequelize');
const db = require('../db');

const CustomMap = db.define('customMap', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  address: {
    type: Sequelize.STRING
  },
  instructions: {
    type: Sequelize.TEXT
  }
});

module.exports = CustomMap;