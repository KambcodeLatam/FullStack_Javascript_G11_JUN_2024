import 'dotenv/config.js';

export default {
    port: process.env.PORT || 3000,
    usernameDB: process.env.DB_USERNAME,
    databaseDB: process.env.DB_DATABASE,
    passwordDB: process.env.DB_PASSWORD,
    hostDB: process.env.DB_HOST,
    portDB: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    env: process.env.ENV,
};

