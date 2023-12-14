const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import your Sequelize connection instance

const Post = sequelize.define('Post', {
  // Define Post model fields (e.g., id, title, content)
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
