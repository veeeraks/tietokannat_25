
const express = require('express');
const router = express.Router();
const arviointi = require('../models/arviointi_model');

// GET kaikki arvioinnit
router.get('/', function (req, res) {
  arviointi.getAll(function (err, dbResult) {
    if (err) {
      res.json(err);
    } else {
      res.json(dbResult);
    }
  });
});

// GET arvioinnit yhdelle opiskelijalle
router.get('/:idOpiskelija', function (req, res) {
  arviointi.getById(req.params.idOpiskelija, function (err, dbResult) {
    if (err) {
      res.json(err);
    } else {
      res.json(dbResult);
    }
  });
});

// POST uusi arviointi
router.post('/', function (req, res) {
  arviointi.add(req.body, function (err, dbResult) {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: 'Arviointi lisätty', data: req.body });
    }
  });
});

// DELETE arviointi
router.delete('/:idOpiskelija/:idOpintojakso', function (req, res) {
  arviointi.delete(req.params.idOpiskelija, req.params.idOpintojakso, function (err, dbResult) {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: 'Arviointi poistettu', result: dbResult });
    }
  });
});

// PUT arvioinnin päivitys
router.put('/:idOpiskelija/:idOpintojakso', function (req, res) {
  arviointi.update(req.params.idOpiskelija, req.params.idOpintojakso, req.body, function (err, dbResult) {

if (err) {
      res.json(err);
    } else {
      res.json({ message: 'Arviointi päivitetty', result: dbResult });
    }
  });
});

module.exports = router;
