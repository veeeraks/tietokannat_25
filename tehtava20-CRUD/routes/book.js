// CRUD -reitit

const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

// GET -metodi: localhost:3000/, kutsuu book.getAll
router.get('/',
    function (request, response) {
        book.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });


// GET valinnaisella parametrilla, localhost:3000/books/3
router.get('/:id?',
    function (request, response) {
        book.getById(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });


// POST -metodi, localhost:3000/books/
/* {"name": "New Book",
    "author": "Jane Doe",
    "isbn": "1234567890"}
*/
router.post('/', 
function(request, response) {
  book.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});

// DELETE -metodi, poistetaan kirja idn perusteella
// localhost:3000/books/5
router.delete('/:id', 
function(request, response) {
  book.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

// UPDATE -metodi, päivittää kirjan tiedot sen idn perusteella
// localhost:3000/books/3
// {"name": "Updated Book Title","author": "New Author","isbn": "9999999999"}
router.put('/:id', 
function(request, response) {
  book.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;
