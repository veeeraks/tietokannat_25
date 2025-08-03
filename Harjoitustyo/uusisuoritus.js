const db = require('./db');

function uusiSuoritus(idOpiskelija, idOpintojakso, arvosana, paivamaara, callback) {
  const sql = 'CALL UusiSuoritus(?, ?, ?, ?)';
  db.query(sql, [idOpiskelija, idOpintojakso, arvosana, paivamaara], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

module.exports = uusiSuoritus;
