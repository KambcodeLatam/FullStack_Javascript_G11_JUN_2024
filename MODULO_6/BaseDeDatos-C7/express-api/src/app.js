
const express = require('express');

const { sequelize } = require('./db/sequelize');
const env = require('./config/env');


//routes 
const movieRoutes = require('./routes/movies.routes');


async function main () {

    const port = env.port;
    const app = express();
    app.use(express.json());

    app.use(movieRoutes);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
        app.listen(port, () => {
            console.log('listening on port ' + port);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
   
    
}


main();




