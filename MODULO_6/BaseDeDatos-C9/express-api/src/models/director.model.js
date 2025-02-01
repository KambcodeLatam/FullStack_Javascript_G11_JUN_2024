import { DataTypes } from "sequelize";
import { sequelize } from '../db/sequelize.js';
import { Movie } from "./movie.model.js";

export const Director  = sequelize.define('director', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }, 

}, {
    timestamps: true,
});


Director.hasMany(Movie, {
    foreignKey: 'directorId',
    sourceKey: 'id',
});

Movie.belongsTo(Director, {
    foreignKey: 'directorId',
    targetKey: 'id',
});