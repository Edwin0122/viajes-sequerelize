const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/db');

class TpDocument extends Model {}
TpDocument.init(
    {
        id_tp_document: 
        {
           type: Sequelize.INTEGER,
           allowNull: true,
           primaryKey: true,
           autoIncrement:true 
        },
        description: 
        {
            type: Sequelize.STRING,
            allowNull: true
        },
        acronym: 
        {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "tp_document",
        timestamps: false
    }
)



module.exports = TpDocument;