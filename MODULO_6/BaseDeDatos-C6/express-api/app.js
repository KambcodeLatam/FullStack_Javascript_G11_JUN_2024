
const express = require('express');

const { movies } = require('./data');


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());


app.get('/', (request, response) => {
    response.status(202).send('It Works');
});


app.get('/movies', (req, res) => {
    res.json(movies);
});


app.get('/movies/:id', (req, res) => {
    const movie = movies.find(movie => movie.id === Number(req.params.id));

    if ( !movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
});

app.post('/movies', (req, res) => {

    // body validation
    const { title, genre } = req.body;

    if (!title || !genre ) return res.status(404).json({ message: 'All fields are required' });

    const newMovie = {
        ...req.body,
        id : movies.length +1,
    };

    movies.push(newMovie);
    res.status(201).json(newMovie);
});


app.put('/movies/:movieID', (req, res) => {

    const id = Number(req.params.movieID);

    const movie =  movies.find(m => m.id === id);

    if ( !movie) return res.status(404).json({ message: 'Movie not found'});
    
    movie.directorId = req.body.directorId;
    movie.title = req.body.title;
    movie.genre = req.body.genre;
    movie.releaseYear = req.body.releaseYear;

    res.status(200).json(movie);
});


app.delete('/movies/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const movieIndex = movies.findIndex(m => m.id === id);
    if (movieIndex === -1) return res.status(404).send('Movie not found');

    const deletedMovie = movies.splice(movieIndex, 1);
    res.json(deletedMovie[0]);
  });



app.listen(port, () => {
    console.log('listening on port ' + port);
});


// HTTP Protocol


