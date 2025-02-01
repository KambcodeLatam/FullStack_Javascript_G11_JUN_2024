import { sequelize } from'./db/sequelize.js';
import { Server } from "./server.js";
import env from './config/env.js';

//models
import './models/index.js';

//routes 
import routes from './routes/index.js';


async function main () {

    const port = env.port;
   
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        sequelize.sync({ force: false });

        const server = new Server(port, routes);

        server.start();
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
}


main();




