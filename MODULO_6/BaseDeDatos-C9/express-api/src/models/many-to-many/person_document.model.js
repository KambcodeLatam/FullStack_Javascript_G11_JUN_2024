import { DataTypes } from 'sequelize';
import { sequelize } from "../../db/sequelize.js";
import { DocumentII } from "./documentII.model.js";
import { PersonII } from "./personII.model.js";

export const PersonDocument = sequelize.define('person_document',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    }
});

PersonII.belongsToMany(DocumentII, {
    through: PersonDocument,
});

DocumentII.belongsToMany(PersonII, {
    through: PersonDocument,
});