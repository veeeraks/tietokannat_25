
const db = require('../db');

const arviointi = {
  getAll: function(callback) {
    return db.query('SELECT * FROM arviointi', callback);
  },
  getById: function(idOpiskelija, callback) {
    return db.query('SELECT * FROM arviointi WHERE idOpiskelija = ?', [idOpiskelija], callback);
  },
  add: function(data, callback) {
    return db.query(
      'INSERT INTO arviointi (idOpiskelija, idOpintojakso, Arvosana, Paivamaara) VALUES (?, ?, ?, ?)',
      [data.idOpiskelija, data.idOpintojakso, data.Arvosana, data.Paivamaara],
      callback
    );
  },
  delete: function(idOpiskelija, idOpintojakso, callback) {
    return db.query(
      'DELETE FROM arviointi WHERE idOpiskelija = ? AND idOpintojakso = ?',
      [idOpiskelija, idOpintojakso],
      callback
    );
  },
  update: function(idOpiskelija, idOpintojakso, data, callback) {
    return db.query(
      'UPDATE arviointi SET Arvosana = ?, Paivamaara = ? WHERE idOpiskelija = ? AND idOpintojakso = ?',
      [data.Arvosana, data.Paivamaara, idOpiskelija, idOpintojakso],
      callback
    );
  }
};

module.exports = arviointi;

