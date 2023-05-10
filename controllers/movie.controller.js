const Movie = require('../model/movie');
const errorFunction = require('../utils/errorFunction');


const addMovie = async (req, res, next) => {
    const { title, year, director, rating } = req.body;
    try {
        const existingMovie = await Movie.findOne({
            title
        }).lean(true)
        if (existingMovie) {return res.status(403).json({message: 'Movie Already Exists'})}
        else{
            const newMovie = await Movie.create({
                title,
                year,
                director,
                rating
            });
        return res.status(201).json({message: 'Movie created successfully', movie: newMovie})
        }
        
    } catch (error) {
        return res.status(400).json(errorFunction(true, 'Error Creating Movie'))
    }
}

const getMovies = async (req, res, next) => {
    const { id } = req.params;
    try {
        const allMovies = await Movie.find();
        return res.status(200).json({message: 'All movies returned', movies: allMovies})
    } catch (error) {
        return res.status(400).json(errorFunction(true, 'Error fetching movies'))
    }
}

module.exports = { addMovie, getMovies}