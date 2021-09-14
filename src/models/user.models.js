const { Sequelize, Model } = require('sequelize');
const sequelize = require('../db/db');
//models o interface
class User extends Model {}
User.init(
    {
        document_number: 
        {
           type: Sequelize.STRING,
           allowNull: true 
        },
        first_name: 
        {
            type: Sequelize.STRING,
            allowNull: true
        },
        second_name: 
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname:
        {
            type: Sequelize.STRING,
            allowNull: true
        },
        second_surname: 
        {
            type: Sequelize.STRING,
            allowNull: true
        },
        user_status: 
        {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    },
    {
        sequelize,
        modelName: "user"
    }
)



module.exports = User;