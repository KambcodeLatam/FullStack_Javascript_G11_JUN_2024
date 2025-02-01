import { Op } from 'sequelize';
import { Director, Movie } from "../models/index.js";
import { serverError } from "../helper/http.js"

export class DirectorController {

    getMoviesByDirector = async (req, res) => {

        try {
            const directorId = Number(req.params.id);
            
            const directors = await Director.findAll({
                attributes: [ 'name', 'email', 'id'],
                where: { id : directorId },
                include: { 
                    model: Movie, 
                    attributes: ['id', 'title', 'releaseYear']
                },
                
            });

            res.json(directors)
        } catch (error) {
            
        }
    }


    getDirectors = async (req, res) => {

        try {
            const directors = await Director.findAll(
               {
                include: { model: Movie},
               }
            );

            res.json(directors)
        } catch (error) {
            
        }
    }


    getDirectorsByEmail = async (req, res) => {

        try {   
            const typeOfEmail = req.query.email;

             const directors = await Director.findAll({
                attributes: [ 'name', 'email', 'id'],
                where: {
                    email : {
                        [Op.like] : `%@${typeOfEmail}.com`,
                    },
                    
                }
             });
             res.json(directors);   
        } catch (error) {
            
        };
    };


    createDirector = async (req, res) => {

        try {
            const director = await Director.create(req.body);
            res.status(201).json(director);
        } catch (error) {
            serverError(res, error.message);
        }

    };
}