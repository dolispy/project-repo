const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
         },
        year: {
            type: Number,
            min: 1800,
        },
        director: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;