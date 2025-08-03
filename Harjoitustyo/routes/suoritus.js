const express = require('express');
const router = express.Router();
const uusiSuoritus = require('../uusisuoritus');
const poistaSuoritus = require('../poistasuoritus');

router.post('/', (req, res) => {
  const { idOpiskelija, idOpintojakso, arvosana, paivamaara } = req.body;
  uusiSuoritus(idOpiskelija, idOpintojakso, arvosana, paivamaara, (err, result) => {
    if (err) return res.status(500).send(err.message);
    res.send(result);
  });
});

router.delete('/', (req, res) => {
  const { idOpiskelija, idOpintojakso } = req.body;
  poistaSuoritus(idOpiskelija, idOpintojakso, (err, result) => {
    if (err) return res.status(500).send(err.message);
    res.send(result);
  });
});

module.exports = router;
