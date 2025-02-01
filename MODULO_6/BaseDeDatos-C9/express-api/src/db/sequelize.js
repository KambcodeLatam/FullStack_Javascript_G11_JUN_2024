import { Sequelize } from 'sequelize';

import env from '../config/env.js';


export const sequelize = new Sequelize(env.databaseDB, env.usernameDB, env.passwordDB, {
    host: env.hostDB,
    dialect:  env.dialect,
    logging: env.env === 'dev',
});


