import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";

export const PersonII = sequelize.define('personII', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photoURL: {
        type: DataTypes.STRING,
        defaultValue: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
});

