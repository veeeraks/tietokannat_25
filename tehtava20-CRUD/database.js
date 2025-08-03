const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'veera',
  password: 'sisu',
  database: 'tehtava20'
});

module.exports = connection;