const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'veera',
  password: 'sisu',
  database: 'harjoitustyo_tietokannatjarajapinnat'
});

module.exports = connection;