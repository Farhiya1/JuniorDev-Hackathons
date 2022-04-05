const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Startup extends Model {}

Startup.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Startupname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          
        team_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'team',
                key: 'id',
            },
        project_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'project',
                key: 'id'
            }
        }
        },
    },
     {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'startup'
        }


)

module.exports = Startup;