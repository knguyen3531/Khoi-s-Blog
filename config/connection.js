const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost', // Set the host to "localhost"
    port: 3001, // Set the port to 3001
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;
