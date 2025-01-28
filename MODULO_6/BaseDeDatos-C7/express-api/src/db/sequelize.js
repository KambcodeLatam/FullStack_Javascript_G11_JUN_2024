const { Sequelize } = require('sequelize');

const env = require('../config/env');


const sequelize = new Sequelize(env.databaseDB, env.usernameDB, env.passwordDB, {
    host: env.hostDB,
    dialect:  env.dialect,
    logging: env.env === 'dev',
});


sequelize.query(`
    CREATE TABLE IF NOT EXISTS Movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    genre VARCHAR(50),
    releaseYear INT
    );
`)
.then(() => console.log('Movie Table was created'))
.catch((error) => console.error(error));


sequelize.query(`
    CREATE TABLE IF NOT EXISTS Directors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    nationality VARCHAR(50)
  );
`)
.then(() => console.log('Director table was created'))
.catch((e) => console.error(e));



module.exports = {
    sequelize,
};