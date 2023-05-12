const express = require('express');
const auth = require('../userAuth');
const { addMovie, getMovies } = require('../controllers/movie.controller');

const router = express.Router();
router.get('/movies',auth ,getMovies);
router.post('/movie/add', auth ,addMovie)

module.exports = router;