const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'veera',
  password: '????',
  database: 'tehtava20'
});

module.exports = connection;
