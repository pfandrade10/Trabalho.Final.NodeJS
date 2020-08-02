var mysql = require('mysql');

const databaseConfig = {
  host: "pos-web-fullstack.cr4adjrmfn6h.us-east-1.rds.amazonaws.com",
  username: "admin",
  password: "admin123",
  database: "Trabalho-Final-Node",
  dialect: 'mysql',
  port: '3306'
};

module.exports = databaseConfig