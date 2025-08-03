// CRUD -reitit

const express = require('express');
const router = express.Router();
const opiskelija = require('../models/opiskelija_model');

// GET -metodi: localhost:3000/,
router.get('/',
    function (request, response) {
        opiskelija.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });


// GET valinnaisella parametrilla
router.get('/:id?',
    function (request, response) {
        opiskelija.getById(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });


// POST -metodi
router.post('/', 
function(request, response) {
  opiskelija.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});

// DELETE -metodi
router.delete('/:id', 
function(request, response) {
  opiskelija.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

// UPDATE -metodi
router.put('/:id', 
function(request, response) {
  opiskelija.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;