const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/db');

class Country extends Model {}
Country.init(
    {
        country_id: 
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
        }
    }, 
    {
        sequelize,
        modelName: "country",
    }
)



module.exports = Country;