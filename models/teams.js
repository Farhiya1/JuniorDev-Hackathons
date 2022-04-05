const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
    
    teamName: {

        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
      },
    
      project_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'project',
            key: 'id',
        },
      },
    
      startup: {
        type: DataTypes.INTEGER,
        references: {
            model: 'startup',
            key: 'id',
        },
      },
    },
 

        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'team'
        }
        );

module.exports = Team;


   