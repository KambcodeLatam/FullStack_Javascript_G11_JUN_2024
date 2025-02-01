import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";

export const DocumentII = sequelize.define('documentII', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    text: { type: DataTypes.STRING }
});