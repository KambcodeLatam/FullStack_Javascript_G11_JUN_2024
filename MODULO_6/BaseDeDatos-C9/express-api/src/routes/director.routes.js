import { Router } from 'express';
import { DirectorController } from "../controllers/director.controller.js";

const controller = new DirectorController();
const router = Router();


router.get('/directors', controller.getDirectors);

router.get('/directors/:id/movies', controller.getMoviesByDirector);


router.get('/directors/email', controller.getDirectorsByEmail);

router.post('/directors', controller.createDirector);


export default router;
