
const db = require('../db');

const suoritus = {
  add: function(data, callback) {
    return db.query('CALL UusiSuoritus(?, ?, ?, ?)', 
      [data.idOpiskelija, data.idOpintojakso, data.Arvosana, data.Paivamaara], 
      callback);
  },
  delete: function(idOpiskelija, idOpintojakso, callback) {
    return db.query('CALL PoistaSuoritus(?, ?)', 
      [idOpiskelija, idOpintojakso], 
      callback);
  }
};

module.exports = suoritus;
