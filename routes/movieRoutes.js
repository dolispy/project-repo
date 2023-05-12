const express = require('express');
const movieValidation = require('../validinfo');
const { addMovie, getMovies } = require('../controllers/movie.controller');

const router = express.Router();
router.get('/movies', getMovies);
router.post('/movie/add', movieValidation, addMovie)

module.exports = router;
