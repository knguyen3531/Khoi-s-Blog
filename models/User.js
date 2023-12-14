const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import your Sequelize connection instance

const User = sequelize.define('User', {
  // Define User model fields (e.g., id, username, password)
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
