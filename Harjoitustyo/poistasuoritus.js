const db = require('./db');

function poistaSuoritus(idOpiskelija, idOpintojakso, callback) {
  const sql = 'CALL PoistaSuoritus(?, ?)';
  db.query(sql, [idOpiskelija, idOpintojakso], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

module.exports = poistaSuoritus;
