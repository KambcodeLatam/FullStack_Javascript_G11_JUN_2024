const { Router } = require('express');

const { sequelize } = require('../db/sequelize');
const { serverError } = require('../helper/http');

const router = Router();

router.get('/movies', async (req, res) => {

    try {
        const movies = await sequelize.query(`
            SELECT * FROM movies;
        `,
        {
            type: sequelize.QueryTypes.SELECT,
        } 
        );
    
        res.json(movies); 
    } catch (error) {
        serverError(res, e.message);
    }

    
});


router.get('/movies/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        const [movie] = await sequelize.query(`
            SELECT * FROM movies
            WHERE id = :id;
        `,
        {   
            replacements: {id},
            type: sequelize.QueryTypes.SELECT,
        } 
        );

        console.log(movie);
        
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        
        res.json(movie);
    
    } catch (e) {
        serverError(res, e.message);
    }

   
});

router.post('/movies', async (req, res) => {


    try {
        const { title, genre, releaseYear } = req.body;

        if (!title || !genre || !releaseYear) return res.status(404).json({ message: 'All fields are required' });


        const [result] = await sequelize.query(`
            INSERT INTO movies (title, genre, releaseYear)
            VALUES (:title, :genre, :releaseYear)
            RETURNING *
            ;
        `, {
            replacements: {title, genre, releaseYear},
            type: sequelize.QueryTypes.INSERT,
        });

        console.log(result);
    
        res.status(201).json(result[0]);
    } catch (e) {
        serverError(res, e.message);;
    }
    
    
});


router.put('/movies/:movieID',async (req, res) => {

    try {
        const id = Number(req.params.movieID);
        const {title, genre, releaseYear } = req.body;

        if ( !title || !genre || !releaseYear) {
            return res.status(400).json({message: 'All fields must be provided'});
        }

        const [results] =  await sequelize.query(`
            UPDATE movies
            SET title =:title,
                genre =:genre,
                releaseYear = :releaseYear
            WHERE id = :id
            RETURNING *;
        `, {
            replacements: {id, genre, title, releaseYear},
            type: sequelize.QueryTypes.UPDATE,
        });

        if (!results.length) return res.status(404).json({ message: 'Movie not found'});
        
        console.log(results);

        res.status(200).json(results[0]);
    } catch (e) {
        serverError(res, e.message);
    }

    
});


router.delete('/movies/:id', async (req, res) => {

    try {
        const id = parseInt(req.params.id);
      
        const results =  await sequelize.query(`
            DELETE FROM movies
            WHERE id = :id
            RETURNING *;
        `, {
            replacements: { id },
            type: sequelize.QueryTypes.DELETE,
        });

        console.log(results);

        if (!results.length) return res.status(404).json({ message: 'Movie not found'});

        res.status(200).json(results[0]);
    } catch (e) {
        serverError(res, e.message);
    }
});


module.exports = router;