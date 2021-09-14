const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/db');

class Role extends Model {}
Role.init(
    {
        id_role: 
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
        modelName: "role",
        timestamps: true
    }
)



module.exports = Role;