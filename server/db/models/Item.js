const Sequelize = require('sequelize');
const db = require('../db');

const Item = db.define('item', {
  imageData: {
    type: Sequelize.STRING
  }
});

module.exports = Item;