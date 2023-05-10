require('dotenv').config();
require('./db/connection');
const express = require('express')
const movieRoutes = require('./routes/movieRoutes')
const app = express()
const port = 3000

app.use(express.json({ limit: "10MB"}));
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send({ message: "Welcome to our Movie Store" })
})
app.use('/', movieRoutes)






app.listen(port, () => console.log(`Express app running on ${port}`))