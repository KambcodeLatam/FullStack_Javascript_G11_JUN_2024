import { Movie, Director } from '../models/index.js';
import { serverError } from '../helper/http.js';

export class MovieController {

    getMovies = async (req, res) => {
        try {   
            const movies = await Movie.findAll();

            res.json(movies); 
        } catch (e) {
            serverError(res, e.message);
        }
    }

    getMoviesByDirector = async (req, res) => {
        try {
            const directorId = Number(req.params.directorId);
            const movies = await Movie.findAll({
                where: { directorId },
                include: { 
                    model: Director,
                    attributes: ['name', 'email']
                }
            });

            res.json(movies); 
        } catch (e) {
            serverError(res, e.message);
        }
    }

    findById = async (req, res) => {
    
        try {
            const id = Number(req.params.id);
            const movie = await Movie.findByPk(id);
    
            if (!movie) return res.status(404).json({ message: 'Movie not found' });
            
            res.json(movie);
        
        } catch (e) {
            serverError(res, e.message);
        }
    
       
    }

    createMovie = async (req, res) => {
        try {
            const { title, genre, releaseYear } = req.body;
    
            if (!title || !genre || !releaseYear) return res.status(404).json({ message: 'All fields are required' });
    
    
            const movie = await Movie.create(req.body);
            //movie.save();
            
            console.log(movie);
        
            res.status(201).json(movie);
        } catch (e) {
            serverError(res, e.message);
        }
        
        
    }

    updateMovie = async (req, res) => {

        try {
            const id = Number(req.params.movieID);
            const { title, genre, releaseYear } = req.body;
    
            if ( !title || !genre || !releaseYear) {
                return res.status(400).json({message: 'All fields must be provided'});
            }
    
            // const movie =  await Movie.update({
            //     title,
            //     genre,
            //     releaseYear
            // }, { 
            //     where: { id },
            //     returning: true,
            // });

            const movie = await Movie.findByPk(id);

            if (!movie) return res.status(404).json({ message: 'Movie not found'});

            movie.set({
                title,
                genre,
                releaseYear,
            });

            await movie.save();

        
            res.status(200).json(movie);
        } catch (e) {
            serverError(res, e.message);
        }
    
        
    }

    deleteMovie = async (req, res) => {

        try {
            const movieId = parseInt(req.params.id);

            const movie = await Movie.findOne({
                where: { id: movieId},
            });

            if (!movie) return res.status(404).json({ message: 'Movie not found'});
          
            await Movie.destroy({
                where: { id: movieId }
            });
          
            res.status(200).json(movie);
        } catch (e) {
            serverError(res, e.message);
        }
    }

}