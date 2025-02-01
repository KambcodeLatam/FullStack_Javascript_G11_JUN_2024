import { Router } from 'express';
import { MovieController } from "../controllers/movie.controller.js";

const controller = new MovieController();
const router = Router();

router.get('/movies', controller.getMovies);

router.get('/movies/director/:directorId', controller.getMoviesByDirector);

router.get('/movies/:id', controller.findById);

router.post('/movies', controller.createMovie);

router.put('/movies/:movieID', controller.updateMovie);

router.delete('/movies/:id', controller.deleteMovie );

export default router;

